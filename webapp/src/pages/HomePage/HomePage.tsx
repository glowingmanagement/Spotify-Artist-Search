import { useState } from "react";

import { SpotifyArtistResponse } from "../../types";
import ErrorMessage from "../../components/ErrorMessage";
import SearchBar from "../../components/SearchBar";
import SearchResults from "../../components/SearchResults";
import HomePageTitles from "../../containers/HomePageTitles";

import "./HomePage.css";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] =
    useState<SpotifyArtistResponse | null>(null);
  const [isError, setIsError] = useState(false);

  return (
    <div className="homePageBodyContainer">
      {!searchResults || searchResults.artists.items.length === 0 ? (
        <>
          <HomePageTitles />
          <SearchBar
            search={search}
            setSearch={setSearch}
            setSearchResults={setSearchResults}
            setIsError={setIsError}
          />
          {searchResults && searchResults.artists.items.length === 0 && (
            <ErrorMessage
              title="Couldn't find any artists with that name"
              message="Please try again"
            />
          )}
        </>
      ) : (
        <SearchResults
          searchResult={searchResults}
          setSearchResults={setSearchResults}
        />
      )}

      {isError && (
        <ErrorMessage
          title="Oops! Something went wrong"
          message="Please try again later"
        />
      )}
    </div>
  );
};

export default HomePage;
