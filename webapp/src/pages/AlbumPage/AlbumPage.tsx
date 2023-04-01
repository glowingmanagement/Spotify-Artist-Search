import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SpotifyAlbumResponse } from "../../types";
import spotifyApiInstance from "../../spotifyApiInstance";
import "./AlbumPage.css";
import SpotifyTag from "../../components/SpotifyTag";
import AlbumTrackRow from "../../components/AlbumTrackRow";

const AlbumPage = () => {
  const { id } = useParams();
  const [isError, setIsError] = useState(false);
  const [albumData, setAlbumData] = useState<SpotifyAlbumResponse | null>(null);
  const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);

  const getAlbumData = async () => {
    try {
      const response = await spotifyApiInstance.get(`api/album/${id}`);
      setAlbumData(response.data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getAlbumData();
  }, []);

  const handlePlayPause = (trackId: string) => {
    if (playingTrackId === trackId) {
      setPlayingTrackId(null);
    } else {
      setPlayingTrackId(trackId);
    }
  };

  return (
    <div className="albumPreviewContainer">
      <div className="albumInfoContainer">
        <img
          src={albumData?.albumImage.url}
          alt={`${albumData?.albumName} Artwork`}
          className="artworkPreview"
        />
        <div className="albumInfoTextContainer">
          <h1 className="albumTitle">
            {albumData?.albumName} ({albumData?.albumReleaseDate.split("-")[0]})
            - {albumData?.artists[0].name}
          </h1>
          <SpotifyTag
            name="Popularity"
            value={albumData ? albumData?.albumPopularity.toString() : "0"}
          />
        </div>
      </div>
      <div className="albumTracksContainer">
        {albumData?.albumTracks.map((track) => {
          return (
            <AlbumTrackRow
              key={track.id}
              track={track}
              isPlaying={track.id === playingTrackId}
              onPlayPause={handlePlayPause}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AlbumPage;
