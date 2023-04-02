import { useState, useEffect, KeyboardEvent, ChangeEvent } from "react";
import spotifyApiInstance from "../../spotifyApiInstance";
import { SpotifyArtistResponse } from "../../types";
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
