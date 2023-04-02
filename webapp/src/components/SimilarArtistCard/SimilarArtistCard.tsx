import { Link } from "react-router-dom";
import "./SimilarArtistCard.css";

const SimilarArtistCard = ({ artist }: any) => {
  return (
    <div className="similarArtistCardContainer">
      <Link to={`/search/${artist.id}`} className="link">
        <img
          src={artist.images[0].url}
          alt={artist.name}
          className="similarArtistProfileImage"
        />
        <h3 className="similarArtistText">{artist.name}</h3>
      </Link>
    </div>
  );
};

export default SimilarArtistCard;
