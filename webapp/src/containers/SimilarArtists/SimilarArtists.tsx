import "./SimilarArtists.css";
import { SpotifyRelatedArtistsResponse } from "../../types";
import SimilarArtistCard from "../../components/SimilarArtistCard";

type SimilarArtistsProps = {
  relatedArtists: SpotifyRelatedArtistsResponse;
};

const SimilarArtists = ({ relatedArtists }: SimilarArtistsProps) => {
  return (
    <div>
      <h2 className="similarArtistsTitle">Similar Artists</h2>
      <div className="similarArtistContainer">
        {relatedArtists.artists.map((artist: any) => {
          return <SimilarArtistCard key={artist.id} artist={artist} />;
        })}
      </div>
    </div>
  );
};

export default SimilarArtists;
