import "./ArtistInfo.css";
import { SpotifyArtistProfileResponse } from "../../types";
import SpotifyTag from "../../components/SpotifyTag";

type ArtistInfoProps = {
  searchResults: SpotifyArtistProfileResponse;
};

const ArtistInfo = ({ searchResults }: ArtistInfoProps) => {
  const formatFollowers = (followers: number) => {
    if (followers < 1000) {
      return followers.toString();
    } else if (followers < 1000000) {
      return `${(followers / 1000).toFixed(1)}K`;
    } else {
      return `${(followers / 1000000).toFixed(1)}M`;
    }
  };

  return (
    <div>
      <div className="artistDetails">
        <div>
          <h1 className="artistNameTitle">{searchResults.artistName}</h1>
          <p className="artistGenreText">{searchResults.genres.join(", ")}</p>
        </div>
        <img
          src={searchResults.artistImage.url}
          alt={`${searchResults.artistName} profile`}
          className="artistProfileImage"
        />
      </div>
      <div className="artistTags">
        <SpotifyTag
          name={"Followers"}
          value={formatFollowers(searchResults.followers)}
        />
        <SpotifyTag
          name={"Popularity"}
          value={formatFollowers(searchResults.artistPopularity)}
        />
      </div>
    </div>
  );
};

export default ArtistInfo;
