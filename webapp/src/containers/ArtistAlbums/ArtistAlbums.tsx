import AlbumCard from "../../components/AlbumCard";
import { SpotifyArtistAlbums } from "../../types";
import { Link } from "react-router-dom";
import "./ArtistAlbums.css";

type ArtistAlbumsTypes = {
  albums: SpotifyArtistAlbums;
};

const ArtistAlbums = ({ albums }: ArtistAlbumsTypes) => {
  return (
    <div className="albumContainer">
      {albums.albums.map((album: any) => {
        return (
          <Link to={`/album/${album.id}`} key={album.id} className="albumLink">
            <AlbumCard key={album.id} album={album} />
          </Link>
        );
      })}
    </div>
  );
};

export default ArtistAlbums;
