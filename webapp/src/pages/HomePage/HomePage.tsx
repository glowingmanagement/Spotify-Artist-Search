import { FC } from 'react';
import UnHurdLogo from '../../assets/images/logo.svg';

interface Props {
  // Define the props that will be passed to the component here
}

const HomePage: FC<Props> = (props) => {
  // Define the component logic here
  return (
    <div style={{backgroundColor: '#000', height: "100vh"}}>
      <img src={UnHurdLogo} alt="UnHurd Logo"/>
    </div>
  );
}

export default HomePage;