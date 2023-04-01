import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HomePageTitles from '../../containers/HomePageTitles';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className='homePageContainer'>
      <Header />
      <HomePageTitles />
      <div className='footer'>
        <Footer />
      </div>
    </div>


  );
}

export default HomePage;