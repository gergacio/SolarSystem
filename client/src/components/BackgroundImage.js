import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
const image = require("../images/sun.jpg");


const ItemImage = styled.img `
height: 500px;
`


const BackgroundImage = () => {
  const clickHandler = () => {
    
  }

    return(
        <div>
             
             <Link 
             onClick={clickHandler}>
                <ItemImage 
                src={image} 
                alt="item"/>
            </Link>
            
        </div>
       
    );
}

export default BackgroundImage;