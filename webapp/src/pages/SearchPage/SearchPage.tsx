import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { id } = useParams();

  console.log(id);

  return <div>SearchPage</div>;
};

export default SearchPage;
