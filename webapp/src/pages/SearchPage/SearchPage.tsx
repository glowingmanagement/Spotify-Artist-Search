import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpotifyTag from "../../components/SpotifyTag";
import ErrorMessage from "../../components/ErrorMessage";
import spotifyApiInstance from "../../spotifyApiInstance";
import { SpotifyArtistProfileResponse } from "../../types";
import "./SearchPage.css";
import ArtistInfo from "../../containers/ArtistInfo";
import ArtistAlbums from "../../containers/ArtistAlbums";

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

  useEffect(() => {
    getArtistData();
  }, []);

  return (
    <div className="artistPageContainer">
      {searchResults && (
        <div>
          <ArtistInfo searchResults={searchResults} />
          <ArtistAlbums albums={{ albums: searchResults.albums }} />
        </div>
      )}
      {isError && <ErrorMessage />}
    </div>
  );
};

export default SearchPage;
