import { Album } from "../../types";
import "./AlbumCard.css";

type AlbumCardTypes = {
  album: Album;
};

const AlbumCard = ({ album }: AlbumCardTypes) => {
  return (
    <div className="albumCardContainer">
      <img src={album.image.url} alt={album.trackName} className="albumImage" />
      <p className="albumInfoText">
        {album.trackName} ({album.release_date.split("-")[0]})
      </p>
    </div>
  );
};

export default AlbumCard;
