import React from "react";
import styled from 'styled-components';
import {NavBar as Router, Link} from 'react-router-dom';


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
            <h2>fact_2: {selectedPlanet.fact_2}</h2>
            <img src={selectedImage} alt="planet img"  width={500} height={500}/>  
        
            <Link to="/quiz">
            <img 
                style={{ height: 500 }} 
                width={80} 
                src={selectedPlanet.gif}/>
            </Link>


            <Link to="/quiz">
            <img
             style={{ height: 275 }} 
             src={selectedPlanet.img}/>
            </Link>



        </StockItem>
    );
}
export default Planet;