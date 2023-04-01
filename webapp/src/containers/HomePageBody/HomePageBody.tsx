import { useEffect, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import SearchBar from "../../components/SearchBar";
import HomePageTitles from "../HomePageTitles";
import "./HomePageBody.css";

const HomePageBody = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (searchResults) {
      console.log(searchResults);
    }
  }, [searchResults]);

  return (
    <div className="homePageBodyContainer">
      <HomePageTitles />
      <SearchBar
        search={search}
        setSearch={setSearch}
        setSearchResults={setSearchResults}
        setIsError={setIsError}
      />
      {isError && <ErrorMessage />}
    </div>
  );
};

export default HomePageBody;
