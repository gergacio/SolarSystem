import React from "react";
import styled from 'styled-components';
import NavBar from "./NavBar.js"

const HeaderSC = styled.header`
background-color: grey;
color: white;
display: flex;
justify-content: space-between;
`
const HeaderGroup = styled.hgroup `
display: flex;
flex-direction: column;
margin: 0;
padding-left: 30px;
`
 

const Header = () => {


    return(
        <HeaderSC>
            <HeaderGroup>
                <h2>Header</h2>
                <h3>More headings check if this is working/ nEW CHANGES</h3>
            </HeaderGroup>
         
          <NavBar />
        </HeaderSC>

    );
}

export default Header;