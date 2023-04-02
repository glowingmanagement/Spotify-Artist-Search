import { SpotifyArtistProfileResponse } from "../../types";
import SpotifyTag from "../../components/SpotifyTag";

import "./ArtistInfo.css";

type ArtistInfoProps = {
  searchResults: SpotifyArtistProfileResponse;
};

const ArtistInfo = ({ searchResults }: ArtistInfoProps) => {
  const defaultImage: string =
    "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";
  const artistImage = searchResults.artistImage?.url || defaultImage;
  const formatFollowers = (followers: number) => {
    if (followers === 0) {
      return "0";
    } else if (followers < 1000 && followers > 0) {
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
          src={artistImage}
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
