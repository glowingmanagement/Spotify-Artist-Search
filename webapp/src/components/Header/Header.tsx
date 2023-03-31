import UnHurdLogo from '../../assets/images/logo.svg';
import './Header.css';


const Header = () => {
  // Define the component logic here
  return (
    <div className='headerContainer'>
        <div className='navLeft'>
            <img src={UnHurdLogo} alt="UnHurd Logo" className='logo'/>
            <div className='divider'></div>
            <h1 className='headerLeftText'>The #1 music marketing app</h1>
        </div>
    </div>
  );
}

export default Header;