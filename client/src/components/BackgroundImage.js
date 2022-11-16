import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const BackgroundImage = () => {
    const ItemImage = styled.img `
    height: 500px;
  `
  function clickHandler (event) {
    console.log("click sun")
  }
    return(
        <div>

           <Link><ItemImage onClick={clickHandler} type="image" src={require("../images/sun.jpg")} alt="item" /></Link>
        </div>
       
    );
}

export default BackgroundImage;