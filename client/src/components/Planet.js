import React from "react";
import styled from 'styled-components';

const Planet = ({selectedPlanet, selectedImage}) => {
    const StockItem = styled.div `
    margin: 5px;
    display: flex;
    flex-direction: column;
  `


    return(
        <StockItem>
            <h1>name: {selectedPlanet.name}</h1>
            <h2>discovered_by: {selectedPlanet.discovered_by}</h2>
            <h2>fact_1: {selectedPlanet.fact_1}</h2>
            <img src={selectedImage} alt="planet img"  width={500} height={500}/>  
        </StockItem>
    );
}
export default Planet;