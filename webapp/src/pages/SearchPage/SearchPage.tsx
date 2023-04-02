import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import spotifyApiInstance from "../../spotifyApiInstance";
import { SpotifyArtistProfileResponse } from "../../types";
import "./SearchPage.css";
import ArtistInfo from "../../containers/ArtistInfo";
import ArtistAlbums from "../../containers/ArtistAlbums";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import SimilarArtists from "../../containers/SimilarArtists";

const SearchPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [isError, setIsError] = useState(false);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [searchResults, setSearchResults] =
    useState<SpotifyArtistProfileResponse | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [searchHistory, setSearchHistory] = useState<
    { name: string; image: string }[]
  >([]);
  const limit = 10;
  const MAX_HISTORY_LENGTH = 5;

  const checkIfLastPage = () => {
    if (searchResults) {
      if (pageNumber * limit >= searchResults.totalAlbums) {
        setIsLastPage(true);
      } else {
        setIsLastPage(false);
      }
    }
  };

  const getArtistData = async () => {
    try {
      const response = await spotifyApiInstance.get(
        `api/search/${id}?page=${pageNumber}&limit=${limit}`
      );
      setSearchResults(response.data.searchResult);
      setNumberOfPages(
        Math.ceil(response.data.searchResult.totalAlbums / limit)
      );
      checkIfLastPage();
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getArtistData();
  }, [location.pathname]);

  useEffect(() => {
    checkIfLastPage();
  }, [pageNumber, searchResults]);

  const getNextAlbums = async () => {
    if (!isLastPage) {
      setPageNumber(pageNumber + 1);
      try {
        const response = await spotifyApiInstance.get(
          `api/search/${id}?page=${pageNumber + 1}&limit=${limit}`
        );
        setSearchResults(response.data.searchResult);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
    }
  };

  const getPreviousAlbums = async () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      try {
        const response = await spotifyApiInstance.get(
          `api/search/${id}?page=${pageNumber - 1}&limit=${limit}`
        );
        setSearchResults(response.data.searchResult);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
    }
  };

  const addToHistory = () => {
    const artistName: string | undefined = searchResults?.artistName;
    const artistImage: string | undefined = searchResults?.artistImage.url;
    if (!artistName) return;
    const index = searchHistory.findIndex(
      (item: any) => item.name === artistName && item.image === artistImage
    );
    if (index >= 0) {
      const updatedHistory = [
        ...searchHistory.slice(0, index),
        ...searchHistory.slice(index + 1),
        { name: artistName, image: artistImage || "" },
      ];
      setSearchHistory(updatedHistory.reverse());
    } else {
      const newHistoryItem = { name: artistName, image: artistImage || "" };
      const updatedHistory = [newHistoryItem, ...searchHistory];
      setSearchHistory(updatedHistory.splice(0, MAX_HISTORY_LENGTH));
    }
  };

  useEffect(() => {
    addToHistory();
  }, [searchResults]);

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
    <div className="artistPageContainer">
      {searchResults && (
        <div>
          <div className="artistInfoAndPageNumber">
            <ArtistInfo searchResults={searchResults} />
            <h2 className="pageNumberText">
              Page {pageNumber} of {numberOfPages}
            </h2>
          </div>
          <div className="paginationContainer">
            <FontAwesomeIcon
              icon={faAngleLeft}
              onClick={() => getPreviousAlbums()}
              className={pageNumber === 1 ? "disabled" : "paginationButton"}
            />
            <ArtistAlbums albums={{ albums: searchResults.albums }} />
            <FontAwesomeIcon
              icon={faAngleRight}
              onClick={() => getNextAlbums()}
              className={!isLastPage ? "paginationButton" : "disabled"}
            />
          </div>
          <SimilarArtists relatedArtists={searchResults.relatedArtists} />
        </div>
      )}
      {isError && <ErrorMessage />}
    </div>
  );
};

export default SearchPage;
