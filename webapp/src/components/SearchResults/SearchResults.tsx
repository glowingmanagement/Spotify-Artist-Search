import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SpotifyArtistResponse } from "../../types";

import "./SearchResults.css";

type SearchResultsProps = {
  searchResult: SpotifyArtistResponse | null;
  setSearchResults: (searchResults: SpotifyArtistResponse | null) => void;
};

const SearchResults = ({
  searchResult,
  setSearchResults,
}: SearchResultsProps) => {
  const navigate = useNavigate();
  const [mainArtist, setMainArtist] = useState(searchResult?.artists.items[0]);
  const defaultImage: string =
    "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";

  const changeArtist = () => {
    if (searchResult && mainArtist) {
      const index = searchResult.artists.items.indexOf(mainArtist);
      if (index >= 0 && index < searchResult.artists.items.length - 1) {
        setMainArtist(searchResult.artists.items[index + 1]);
      } else {
        setSearchResults(null);
      }
    }
  };

  const selectArtist = () => {
    if (mainArtist) {
      navigate(`/search/${mainArtist.id}`);
    }
  };

  return (
    <div className="searchResultsContainer">
      <img
        src={mainArtist?.images[0]?.url || defaultImage}
        alt={"Artist profile"}
        className="profileImage"
      />
      <h2 className="confirmText">
        Is {mainArtist?.name} who you're searching for?
      </h2>
      <div className="buttonContainer">
        <button onClick={() => selectArtist()} className="submitButton">
          Yes
        </button>
        <button onClick={() => changeArtist()} className="declineButton">
          No
        </button>
      </div>
    </div>
  );
};

export default SearchResults;
