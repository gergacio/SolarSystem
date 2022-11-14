import React from "react";
import styled from 'styled-components';

const ContentBox = styled.div `
margin: 20px;
display: flex;
justify-content: space-between;
color: gold;
background-color: black;
font-size: 1em;
border: 1px solid black;
padding: 0.5em;
text-align: center; 
`



const Planet = ({selectedPlanet, selectedImage}) => {
    


    return(
        <ContentBox>
            <img src={selectedImage} alt="planet img"  width={400} height={400} border={1}/>  
            <div>
                <h1>Name: {selectedPlanet.name}</h1>
                <h2>- Discovered by: {selectedPlanet.discovered_by}</h2>
                <h2>- Date of discovery: {selectedPlanet.date_of_discovery}</h2>
                <h2>- Profile: {selectedPlanet.profile}</h2>
                <h2>- Distance to Sun: {selectedPlanet.distance_to_sun}</h2>
            </div>
            
        </ContentBox>

    );

    
}
export default Planet;