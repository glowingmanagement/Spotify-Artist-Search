import { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";

const SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1";
const SPOTIFY_ACCOUNTS_BASE_URL = "https://accounts.spotify.com/api";

interface ErrorResponse {
  status: number;
  message: string;
}

const spotifyApiCall = async (url: string, accessToken: string) => {
  try {
    const response: AxiosResponse = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error: any) {
    throw {
      status: error.response?.status || 500,
      message: error.message,
    };
  }
};

const getAccessToken = async (): Promise<string> => {
  const clientId: string | undefined = process.env.CLIENT_ID;
  const clientSecret: string | undefined = process.env.CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error(
      "Client ID or Client Secret is missing in environment variables."
    );
  }

  const url: string = `${SPOTIFY_ACCOUNTS_BASE_URL}/token`;
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
    return response.data.access_token;
  } catch (error: any) {
    const err: ErrorResponse = {
      status: error.response?.status || 500,
      message: error.message,
    };

    throw err;
  }
};

export const getArtistData = async (req: Request, res: Response) => {
  try {
    const artistName: string | undefined = req.query.name as string | undefined;
    const accessToken: string = await getAccessToken();
    const url: string = `${SPOTIFY_API_BASE_URL}/search?q=${artistName}&type=artist&limit=10`;
    const response = await spotifyApiCall(url, accessToken);

    res.status(200).json(response);
  } catch (error: any) {
    const err: ErrorResponse = {
      status: error.response?.status || 500,
      message: error.message,
    };

    res.status(err.status).json(err);
  }
};

export const searchById = async (req: Request, res: Response) => {
  try {
    const artistId: string | undefined = req.params.id as string | undefined;
    const pageNumber: number = parseInt(req.query.page as string) || 1;
    const limit: number = parseInt(req.query.limit as string) || 1;
    const offset = (pageNumber - 1) * limit;
    const accessToken = await getAccessToken();
    const artistUrl = `${SPOTIFY_API_BASE_URL}/artists/${artistId}`;
    const albumsUrl = `${SPOTIFY_API_BASE_URL}/artists/${artistId}/albums?include_groups=album,single&market=GB&limit=${limit}&offset=${offset}`;
    const relatedArtistsUrl = `${SPOTIFY_API_BASE_URL}/artists/${artistId}/related-artists`;

    const [artistResponse, albumsResponse, relatedArtists] = await Promise.all([
      spotifyApiCall(artistUrl, accessToken),
      spotifyApiCall(albumsUrl, accessToken),
      spotifyApiCall(relatedArtistsUrl, accessToken),
    ]);

    const artistData = artistResponse;
    const trackData = albumsResponse;
    const relatedArtistsData = relatedArtists;

    console.log(albumsResponse);

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
    console.log(error);
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
  const url: string = `${SPOTIFY_API_BASE_URL}/albums/${albumId}`;
  try {
    const response = await spotifyApiCall(url, accessToken);

    const albumData = {
      artists: response.artists,
      albumName: response.name,
      albumImage: response.images[0],
      albumReleaseDate: response.release_date,
      albumTotalTracks: response.total_tracks,
      albumTracks: response.tracks.items,
      albumPopularity: response.popularity,
      albumLabel: response.label,
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
