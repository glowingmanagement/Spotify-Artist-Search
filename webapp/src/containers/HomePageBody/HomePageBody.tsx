import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import SearchBar from "../../components/SearchBar";
import SearchResults from "../../components/SearchResults";
import HomePageTitles from "../HomePageTitles";
import { SpotifyArtistResponse } from "../../types";
import "./HomePageBody.css";

const HomePageBody = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] =
    useState<SpotifyArtistResponse | null>(null);
  const [isError, setIsError] = useState(false);

  return (
    <div className="homePageBodyContainer">
      {!searchResults ? (
        <>
          <HomePageTitles />
          <SearchBar
            search={search}
            setSearch={setSearch}
            setSearchResults={setSearchResults}
            setIsError={setIsError}
          />
        </>
      ) : (
        <SearchResults
          searchResult={searchResults}
          setSearchResults={setSearchResults}
        />
      )}

      {isError && <ErrorMessage />}
    </div>
  );
};

export default HomePageBody;
