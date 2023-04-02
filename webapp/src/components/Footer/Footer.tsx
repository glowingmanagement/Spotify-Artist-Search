import WavesBkg from "../../assets/images/wavesBkg.svg";

import "./Footer.css";

const Footer = () => {
  // Define the component logic here
  return (
    <div className="footerContainer">
      <img src={WavesBkg} alt="UnHurd Logo" className="footerBackground" />
    </div>
  );
};

export default Footer;
