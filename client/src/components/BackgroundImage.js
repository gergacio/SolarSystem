import React from "react";
import styled from 'styled-components';

const BackgroundImage = () => {
    const ItemImage = styled.img `
    height: 300px;
    box-shadow: 2px 2px 4px grey;
  `
    return(
        <div>
             <ItemImage src={require("../images/home_img.jpg")} alt="item" />

        </div>
       
    );
}

export default BackgroundImage;