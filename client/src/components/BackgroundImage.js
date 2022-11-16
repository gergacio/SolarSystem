import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
const image = require("../images/sun.jpg");


const ItemImage = styled.img `
height: 500px;
`


const BackgroundImage = () => {
  function handleClick(e){
    console.log(e.target.value);
  }

    return(
        <div>
             
             <Link><ItemImage src={image} alt="item" onClick={handleClick}/></Link>
            
             

        </div>
       
    );
}

export default BackgroundImage;