import { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";

interface ErrorResponse {
  status: number;
  message: string;
}

const getAccessToken = async (): Promise<string> => {
  const clientId: string | undefined = process.env.CLIENT_ID;
  const clientSecret: string | undefined = process.env.CLIENT_SECRET;

  console.log("clientId", clientId);
  console.log("clientSecret", clientSecret);

  if (!clientId || !clientSecret) {
    throw new Error(
      "Client ID or Client Secret is missing in environment variables."
    );
  }

  const url: string = `https://accounts.spotify.com/api/token`;
  try {
    const response: AxiosResponse = await axios.post(
      url,
      "grant_type=client_credentials",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(
            `${clientId}:${clientSecret}`
          ).toString("base64")}`,
        },
      }
    );
    console.log("Access token response", response);
    return response.data.access_token;
  } catch (error) {
    console.error("Error getting access token:", error);
    throw error;
  }
};

export const getArtistData = async (req: Request, res: Response) => {
  const artistName: string | undefined = req.query.name as string | undefined;
  const accessToken: string = await getAccessToken();
  const url: string = `https://api.spotify.com/v1/search?q=${artistName}&type=artist&limit=10`;
  const response: AxiosResponse = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.status(200).json(response.data);
};

export const searchById = async (req: Request, res: Response) => {
  const artistId: string | undefined = req.params.id as string | undefined;
  const pageNumber: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 1;
  const offset = (pageNumber - 1) * limit;
  const accessToken = await getAccessToken();
  const artistUrl = `https://api.spotify.com/v1/artists/${artistId}`;
  const albumsUrl = `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album,single&market=GB&limit=${limit}&offset=${offset}`;
  const relatedArtistsUrl = `https://api.spotify.com/v1/artists/${artistId}/related-artists`;

  try {
    const [artistResponse, albumsResponse, relatedArtists] = await Promise.all([
      axios.get(artistUrl, {
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
      axios.get(albumsUrl, {
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
      axios.get(relatedArtistsUrl, {
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    ]);

    const artistData = artistResponse.data;
    const trackData = albumsResponse.data;
    const relatedArtistsData = relatedArtists.data;

    const filteredTrackData = trackData.items.map((track: any) => {
      return {
        album_type: track.album_type,
        artists: track.artists,
        external_urls: track.external_urls,
        id: track.id,
        image: track.images && track.images.length ? track.images[0] : null,
        trackName: track.name,
        release_date: track.release_date,
        total_tracks: track.total_tracks,
      };
    });

    const searchResult = {
      artistName: artistData.name,
      followers: artistData.followers.total,
      artistImage: artistData.images[0],
      genres: artistData.genres,
      artistPopularity: artistData.popularity,
      artistUri: artistData.uri,
      albums: filteredTrackData,
      totalAlbums: trackData.total,
      relatedArtists: relatedArtistsData,
    };

    res.status(200).json({ searchResult });
  } catch (error: any) {
    const err: ErrorResponse = {
      status: error.response?.status || 500,
      message: error.message,
    };

    res.status(err.status).json(err);
  }
};

export const getAlbumData = async (req: Request, res: Response) => {
  const albumId: string | undefined = req.params.id as string | undefined;
  const accessToken: string = await getAccessToken();
  const url: string = `https://api.spotify.com/v1/albums/${albumId}`;
  try {
    const response: AxiosResponse = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const albumData = {
      artists: response.data.artists,
      albumName: response.data.name,
      albumImage: response.data.images[0],
      albumReleaseDate: response.data.release_date,
      albumTotalTracks: response.data.total_tracks,
      albumTracks: response.data.tracks.items,
      albumPopularity: response.data.popularity,
      albumLabel: response.data.label,
    };
    res.status(200).json(albumData);
  } catch (error: any) {
    const err: ErrorResponse = {
      status: error.response?.status || 500,
      message: error.message,
    };

    res.status(err.status).json(err);
  }
};
