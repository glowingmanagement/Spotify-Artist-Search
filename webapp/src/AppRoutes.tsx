import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/search/:id" element={<SearchPage />} />
    </Routes>
  );
};

export default AppRoutes;
