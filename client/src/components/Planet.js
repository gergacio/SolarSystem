
import React, {useState} from "react";
// import { Link } from "react-router-dom";
import styled from 'styled-components';


const ContentBox = styled.div `
margin: 20px;
display: flex;
justify-content: space-between;
color: gold;
background-color: black;
font-size: 0.5em;
border: 1px solid black;
padding: 0.5em;
text-align: left
`
const SoundButton = styled.button `
background-color: black;
height: 3rem;
border: 2px solid gold;
color: gold;
`

//https://upload.wikimedia.org/wikipedia/commons/e/e4/En-us-mercury.ogg


const Planet = ({selectedPlanet, selectedImage}) => {
    const playsound = (event) => {   //onclick 39
        const url = event.target.value
        const sound = new Audio(url)
        sound.play()
    }
    const handleClick = url => {
        window.open(url);
    }
    
    return(
        <ContentBox> 
            <img src={selectedImage} alt="planet img"  width={400} height={400}/>  
            {/* <input type="image" src={selectedImage} onClick={playsound} value={selectedPlanet.audio} width={400} height={400}></input> */}

            <div className="font">
            <span className="font-link">
                <h1>Name: {selectedPlanet.name}</h1>
                <SoundButton onClick={playsound} value={selectedPlanet.audio}>
                🔊{selectedPlanet.pronunciation} 
                </SoundButton>
                <h2>✨ Pronunciation: {selectedPlanet.pronunciation}</h2>
                <h2>✨ Discovered by: {selectedPlanet.discovered_by}</h2>
                <h2>✨ Date of discovery: {selectedPlanet.date_of_discovery}</h2>
                <h2>✨ Profile: {selectedPlanet.profile}</h2>
                <h2>✨ Distance to Sun: {selectedPlanet.distance_to_sun}</h2>
                <h2>✨ Average temperature Fahrenheit: {selectedPlanet.avg_temp_fahrenheit}</h2>
                <h2>✨ Rotation in days: {selectedPlanet.rotation}</h2>
                <h2>✨ Radius: {selectedPlanet.radius}</h2>
                {/* <Link onClick={clickHandler} value={selectedPlanet.audio} src={selectedPlanet.audio}>- Play sound: </Link> */}
                <button onClick={() => handleClick(selectedPlanet.source)}><small>External Resources</small></button>
                </span>
            </div>
            
        </ContentBox>


    );

    
}
export default Planet;