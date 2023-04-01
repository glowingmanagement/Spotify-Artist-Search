import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="homePageContainer">
      <Header />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
