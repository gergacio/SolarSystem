import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components' 

const Box = styled.div`
margin: 5px;
padding: 5px;
display: flex;
flex-direction: row;
`

const UL = styled.ul`
list-style:none
`
const StyledLink = styled(Link)`
color: white;
text-decoration: none;
`

const NavBar = () => {
  return (
    <Box>
    <UL>
      <li>
        <StyledLink to="/">Homeworld</StyledLink>
      </li>
      <li>
        <StyledLink to="/learning">F.T.Learning</StyledLink>
      </li>  
      <li>
        <StyledLink to="/quiz">Quiz</StyledLink>
      </li>  
    </UL>
    </Box>

  );
}

export default NavBar;