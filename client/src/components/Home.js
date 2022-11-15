import React from "react";
import BackgroundImage from "./BackgroundImage";
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Box = styled.div`
margin: 45px;
display: flex;
justify-content: center;
align-items: center;
background-color: black;
min-height: 80vh;
`
const Home = () => (
  <Box>
    <ReactPlayer

      url="https://www.youtube.com/embed/" 
      playing={true}
    />


  </Box>
);

export default Home;
