import React from "react";
import PlanetContainer from "../containers/PlanetsContainer";
import styled from 'styled-components';

const url = require("../images/sky.jpg");

const Box = styled.div`
margin: 45px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid black;
padding: 20px;
background-color: black;
background-image: url(${url});
color: white;
min-height: 80vh;	



`

const Learning = () => (
  <Box>
    <PlanetContainer />
  </Box>
);

export default Learning;