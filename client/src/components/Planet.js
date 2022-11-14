import React from "react";
import styled from 'styled-components';

const ContentBox = styled.div `
color: white

display: flex;
justify-content: center;
align-items: center;
`
const DIV = styled.div`
color: white;
`


const Planet = ({selectedPlanet, selectedImage}) => {
    


    return(
        <ContentBox>
            <img src={selectedImage} alt="planet img"  width={500} height={500}/>  
            <DIV>
                <h4>name: {selectedPlanet.name}</h4>
                <h4>discovered_by: {selectedPlanet.discovered_by}</h4>
                <h4>fact_1: {selectedPlanet.fact_1}</h4>
            </DIV>
            
        </ContentBox>

    );

    
}
export default Planet;