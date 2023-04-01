import { Routes, Route } from "react-router-dom";
import AlbumPage from "./pages/AlbumPage";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/search/:id" element={<SearchPage />} />
      <Route path="/album/:id" element={<AlbumPage />} />
    </Routes>
  );
};

export default AppRoutes;
