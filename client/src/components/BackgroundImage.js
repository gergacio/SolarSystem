import React from "react";
import styled from 'styled-components';


const BackgroundImage = () => {
    const ItemImage = styled.img `
    height: 500px;
  `
    return(
        <div>
             <ItemImage src={require("../images/sun.jpg")} alt="item" />
        </div>
       
    );
}

export default BackgroundImage;