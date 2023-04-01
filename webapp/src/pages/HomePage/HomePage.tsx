import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import HomePageTitles from '../../containers/HomePageTitles';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className='homePageContainer'>
      <Header />
      <HomePageTitles />
      <SearchBar />
      <div className='footer'>
        <Footer />
      </div>
    </div>


  );
}

export default HomePage;