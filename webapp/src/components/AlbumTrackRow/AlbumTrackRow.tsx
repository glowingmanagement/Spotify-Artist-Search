import { useEffect, useRef } from "react";
import { SpotifyAlbumTracks } from "../../types";
import "./AlbumTrackRow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";

type AlbumTrackRowType = {
  track: SpotifyAlbumTracks;
  isPlaying: boolean;
  onPlayPause: (trackId: string) => void;
};

const AlbumTrackRow = ({
  track,
  isPlaying,
  onPlayPause,
}: AlbumTrackRowType) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const getTrackLength = (ms: number): string => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handlePlayPause = () => {
    console.log(track);
    onPlayPause(track.id);
  };

  const handleAudioEnd = () => {
    onPlayPause(track.id);
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="albumTrackRowContainer">
      <div className="trackRowInfo">
        {track.preview_url && (
          <FontAwesomeIcon
            icon={isPlaying ? faPauseCircle : faPlayCircle}
            onClick={handlePlayPause}
            className="playButton"
          />
        )}

        <div className="trackRowContainer">
          <h2>{track.track_number}.</h2>
          <h2>{track.name}</h2>
        </div>
        <audio
          ref={audioRef}
          src={track.preview_url}
          onEnded={handleAudioEnd}
          style={{ display: "none" }}
        >
          Your browser does not support the audio element.
        </audio>
        <h2>{getTrackLength(track.duration_ms)}</h2>
      </div>

      <div className="dividerContainer">
        <div className="albumDivider"></div>
      </div>
    </div>
  );
};

export default AlbumTrackRow;
