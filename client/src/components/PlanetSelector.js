import React from "react";
import { Link, useLinkClickHandler } from "react-router-dom";
import styled from 'styled-components';


// const Box = styled.div`
// margin: 45px;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// border: 1px solid black;
// background-image: url("../images/home_img.jpg");
// padding: 20px;
// min-height: 80vh;	
// `

const ImageOfPlanet = styled.input`
height: 50px;
margin: 20px;
padding: 10px;

`
const SelectorDiv = styled.div`
display: flex;


`

const PlanetSelector = ({planets, onPlanetSelected, selectorImage}) => {

    
    

    const planetImages = planets.map((planet) => {
        return (
            <Link>
                <ImageOfPlanet type="image" value={planet._id} key={planet._id} src={planet.img} onClick={ClickHandler}/>
            </Link>
        );
        
        
        
    });
    //event handler
    function ClickHandler(event){
        //find selected film pass it to define on top level func comming as props
       onPlanetSelected(event.target.value);
        
    }


    return(
       <selectorImage> 
            {planetImages}

       </selectorImage>
       
    );

}
export default PlanetSelector;