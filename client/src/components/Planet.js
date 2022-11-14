import React from "react";
import styled from 'styled-components';

const Planet = ({selectedPlanet, selectedImage}) => {
    const StockItem = styled.div `
    margin: 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // border: 1px solid black;
    padding: 20px;
    background-color: black;
    color: white;
    
    min-height: 80vh;	
  `


    return(
        <StockItem>
            <h1>{selectedPlanet.name}</h1>
            <img src={selectedImage} alt="planet img"  width={500} height={500}/>  
        </StockItem>
    );
}
export default Planet;