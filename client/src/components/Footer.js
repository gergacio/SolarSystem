import React from "react";
import styled from 'styled-components';
const Box = styled.div`
color: white;
background-color: black;
display: flex;
justify-content: center;
margin-top: auto;

`

const Footer = () => (
  <Box>
    <p> <small>&copy; Copyright 2022, Georgia Esau Georgi</small></p>
  </Box>
);

export default Footer;