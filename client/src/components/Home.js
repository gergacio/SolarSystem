import React from "react";
//import BackgroundImage from "./BackgroundImage";
import styled from 'styled-components';
import Sun from "./Sun";
import { Link } from "react-router-dom";


const Box = styled.div`

display: flex;
justify-content: center;
align-items: center;
background-color: black;
min-height: 80vh;
z-index: -1;
`



const Home = () => (
  <Box>
    {/* <BackgroundImage /> */}
      <Sun />
  </Box>
);

export default Home;

{/* <SoundButton 
onClick={playsound} 
value={selectedPlanet.audio}>{selectedPlanet.pronunciation}
</SoundButton> */}

    // <Link to="/quiz">
    // </Link>