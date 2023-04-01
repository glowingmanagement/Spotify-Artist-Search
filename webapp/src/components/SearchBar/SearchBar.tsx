import { useState, useEffect, KeyboardEvent, ChangeEvent } from "react";
import spotifyApiInstance from "../../spotifyApiInstance";
import "./SearchBar.css";

type SearchBarProps = {
  search: string;
  setSearch: (search: string) => void;
  setSearchResults: (searchResults: string) => void;
  setIsError: (isError: boolean) => void;
};

const SearchBar = ({
  search,
  setSearch,
  setSearchResults,
  setIsError,
}: SearchBarProps) => {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const handleSearch = () => {
    addToHistory();
    searchForArtist();
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const addToHistory = () => {
    const index = searchHistory.indexOf(search.toLowerCase());
    if (index >= 0) {
      const updatedHistory: string[] = [
        search.toLowerCase(),
        ...searchHistory.slice(0, index),
        ...searchHistory.slice(index + 1),
      ];
      setSearchHistory(updatedHistory);
    } else {
      setSearchHistory([search.toLowerCase(), ...searchHistory]);
    }
  };

  const searchForArtist = () => {
    spotifyApiInstance
      .get(`api/search?name=${search}`)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        setIsError(true);
        console.log(error);
      });
  };

  useEffect(() => {
    const savedHistory: string | null = localStorage.getItem("searchHistory");
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    if (searchHistory.length > 0) {
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    }
  }, [searchHistory]);

  return (
    <div className="searchBarContainer">
      <input
        type="text"
        placeholder="Search Artist Name"
        value={search}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="searchInput"
      />
      <button onClick={handleSearch} className="submitButton">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
