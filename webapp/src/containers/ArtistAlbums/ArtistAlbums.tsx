import AlbumCard from "../../components/AlbumCard";
import { SpotifyArtistAlbums } from "../../types";
import "./ArtistAlbums.css";

type ArtistAlbumsTypes = {
  albums: SpotifyArtistAlbums;
};

const ArtistAlbums = ({ albums }: ArtistAlbumsTypes) => {
  return (
    <div className="albumContainer">
      {albums.albums.map((album: any) => {
        return <AlbumCard key={album.id} album={album} />;
      })}
    </div>
  );
};

export default ArtistAlbums;
