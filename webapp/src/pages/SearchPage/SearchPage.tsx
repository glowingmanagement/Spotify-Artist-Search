import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpotifyTag from "../../components/SpotifyTag";
import ErrorMessage from "../../components/ErrorMessage";
import spotifyApiInstance from "../../spotifyApiInstance";
import { SpotifyArtistProfileResponse } from "../../types";
import "./SearchPage.css";

const SearchPage = () => {
  const { id } = useParams();
  const [isError, setIsError] = useState(false);
  const [searchResults, setSearchResults] =
    useState<SpotifyArtistProfileResponse | null>(null);

  const getArtistData = async () => {
    try {
      const response = await spotifyApiInstance.get(`api/search/${id}`);
      setSearchResults(response.data.searchResult);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  const formatFollowers = (followers: number) => {
    if (followers < 1000) {
      return followers.toString();
    } else if (followers < 1000000) {
      return `${(followers / 1000).toFixed(1)}K`;
    } else {
      return `${(followers / 1000000).toFixed(1)}M`;
    }
  };

  useEffect(() => {
    getArtistData();
  }, []);

  useEffect(() => {
    if (searchResults) {
      console.log(searchResults);
    }
  }, [searchResults]);

  return (
    <div className="artistPageContainer">
      {isError && <ErrorMessage />}
      {searchResults && (
        <div>
          <h1 className="artistNameTitle">{searchResults.artistName}</h1>
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
      )}
    </div>
  );
};

export default SearchPage;
