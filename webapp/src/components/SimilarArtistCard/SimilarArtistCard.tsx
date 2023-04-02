import { Link } from "react-router-dom";

import "./SimilarArtistCard.css";

const SimilarArtistCard = ({ artist }: any) => {
  const defaultImage: string =
    "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";
  const artistUrl = artist.images[0]?.url || defaultImage;
  return (
    <div className="similarArtistCardContainer">
      <Link to={`/search/${artist.id}`} className="link">
        <img
          src={artistUrl}
          alt={artist.name}
          className="similarArtistProfileImage"
        />
        <h3 className="similarArtistText">{artist.name}</h3>
      </Link>
    </div>
  );
};

export default SimilarArtistCard;
