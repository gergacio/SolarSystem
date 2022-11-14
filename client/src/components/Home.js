import React from "react";
import BackgroundImage from "./BackgroundImage";
import styled from 'styled-components';
import Sun from "./Sun";

const Box = styled.div`

display: flex;
justify-content: center;
align-items: center;
background-color: black;
min-height: 80vh;

`
const Home = () => (
  <Box>
    {/* <BackgroundImage /> */}
    <Sun />
  </Box>
);

export default Home;