import { useState, useEffect, KeyboardEvent, ChangeEvent } from "react";
import spotifyApiInstance from "../../spotifyApiInstance";
import { SpotifyArtistResponse } from "../../types";
import DisplayHistory from "../DisplayHistory";
import "./SearchBar.css";

type SearchBarProps = {
  search: string;
  setSearch: (search: string) => void;
  setSearchResults: (searchResults: SpotifyArtistResponse) => void;
  setIsError: (isError: boolean) => void;
};

const SearchBar = ({
  search,
  setSearch,
  setSearchResults,
  setIsError,
}: SearchBarProps) => {
  const handleSearch = () => {
    searchForArtist();
  };
  const [history, setHistory] = useState<string[]>([]);
  const [isSearchInputFocused, setIsSearchInputFocused] = useState(false);
  const [blurTimeout, setBlurTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const searchForArtist = async () => {
    try {
      const response = await spotifyApiInstance.get(
        `api/search?name=${search}`
      );
      setSearchResults(response.data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  const getHistory = () => {
    const history: string | null = localStorage.getItem("searchHistory");
    if (history) {
      return JSON.parse(history);
    }
    return [];
  };

  const handleBlur = () => {
    const timeout = setTimeout(() => {
      setIsSearchInputFocused(false);
    }, 100);
    setBlurTimeout(timeout);
  };

  const handleFocus = () => {
    if (blurTimeout) {
      clearTimeout(blurTimeout);
      setBlurTimeout(null);
    }
    setIsSearchInputFocused(true);
  };

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  return (
    <div>
      <div className="searchBarContainer">
        <div>
          <input
            type="text"
            placeholder="Search Artist Name"
            value={search}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className="searchInput"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {isSearchInputFocused && history.length > 0 && (
            <DisplayHistory history={history} />
          )}
        </div>
        <button onClick={handleSearch} className="submitButton">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
