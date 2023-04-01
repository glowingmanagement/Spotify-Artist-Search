import { SpotifyAPIResponse } from "../../types";

type SearchResultsProps = {
  searchResult: SpotifyAPIResponse | null;
};

const SearchResults = ({ searchResult }: SearchResultsProps) => {
  return <div>Search Results</div>;
};

export default SearchResults;
