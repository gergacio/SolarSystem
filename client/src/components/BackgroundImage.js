import React from "react";
import styled from 'styled-components';

const BackgroundImage = () => {
    const ItemImage = styled.img `
    height: 500px;
    box-shadow: 2px 2px 4px grey;
  `
    return(
        <div>
             <ItemImage src={require("../images/home_img.jpeg")} alt="item" />

        </div>
       
    );
}

export default BackgroundImage;