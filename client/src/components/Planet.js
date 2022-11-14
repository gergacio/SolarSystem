import React from "react";
import styled from 'styled-components';

const ContentBox = styled.div `
margin: 20px;
display: flex;
justify-content: space-between;
`


const Planet = ({selectedPlanet, selectedImage}) => {
    


    return(
        <ContentBox>
            <img src={selectedImage} alt="planet img"  width={500} height={500}/>  
            <div>
                <h1>name: {selectedPlanet.name}</h1>
                <h2>discovered_by: {selectedPlanet.discovered_by}</h2>
                <h2>fact_1: {selectedPlanet.fact_1}</h2>
            </div>
            
        </ContentBox>

    );

    
}
export default Planet;