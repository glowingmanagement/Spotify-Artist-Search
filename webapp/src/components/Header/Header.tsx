import UnHurdLogo from '../../assets/images/logo.svg';
import './Header.css';


const Header = () => {
  // Define the component logic here
  return (
    <div className='headerContainer'>
      {/* <img src={UnHurdLogo} alt="UnHurd Logo"/> */}
      <h1 style={{color: "#fff"}}>Title</h1>
    </div>
  );
}

export default Header;