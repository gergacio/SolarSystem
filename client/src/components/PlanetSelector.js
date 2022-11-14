import React from "react";
import styled from "styled-components";

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
       <> 
            <select defaultValue="DEFAULT" onChange={onChange}>
                <option  value="DEFAULT">Choose Planet</option>
                {options}
            </select>
          
            
       </>
    );

}
export default PlanetSelector;