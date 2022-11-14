import React from "react";
import PlanetContainer from "../containers/PlanetsContainer";
import styled from 'styled-components';


const Box = styled.div`
margin: 45px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid black;
padding: 20px;

min-height: 80vh;	
`

const Learning = () => (
  <Box>
    <p>journey to</p>
    <PlanetContainer />
  </Box>
);

export default Learning;