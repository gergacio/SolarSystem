import React from "react";
import styled from 'styled-components';

const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid black;
    
min-height: 80vh;	
`

const PlanetSelector = ({planets, onPlanetSelected}) => {
    //map films and turn obj into jsx options
    const options = planets.map((planet) => {
        return (<option value={planet._id} key={planet._id}>{planet.name}</option>)
    });
    //event handler
    function onChange(event){
        //find selected film pass it to define on top level func comming as props
       console.log(event.target.value);
       onPlanetSelected(event.target.value);
        
    }
    //define select dropdown..attach event onChange
    return(
       <Box> 
            {/* <div style={{ backgroundImage: `url(${backgroundImg})` }}> */}
            <select defaultValue="DEFAULT" onChange={onChange}>
                <option  value="DEFAULT">solar system</option>
                {options}
            </select>            
       </Box>
    );

}
export default PlanetSelector;