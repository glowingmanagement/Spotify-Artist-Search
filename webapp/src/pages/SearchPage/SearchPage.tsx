import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import spotifyApiInstance from "../../spotifyApiInstance";
import { SpotifyAPIResponse } from "../../types";

const SearchPage = () => {
  const { id } = useParams();
  const [isError, setIsError] = useState(false);
  const [searchResults, setSearchResults] = useState<SpotifyAPIResponse | null>(
    null
  );

  const getArtistData = async () => {
    try {
      const response = await spotifyApiInstance.get(`api/search/${id}`);
      setSearchResults(response.data);
    } catch (error) {
      setIsError(true);
      console.log(error);
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

  return <div>SearchPage</div>;
};

export default SearchPage;
