import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomePageBody from "../../containers/HomePageBody";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homePageContainer">
      <Header />
      <HomePageBody />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
