import React from "react";
import styled from 'styled-components';
import NavBar from "./NavBar.js"

const Box = styled.div`
background-color: black;
color: white;
display: flex;
justify-content: end;
`
const H = styled.h2`

`
const Header = () => {
    return(
         <Box> 
           <NavBar />
        </Box>   
    );
}

export default Header;