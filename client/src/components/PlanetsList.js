import Planet from "./Planet";
import styled from "styled-components";

const PlanetsList = ({planets}) => {
    //turn arr of obj into list of Planet components
    const PlanetComponentList = planets.map( (planet, index) => {
        //Always put in round brackets!!!!!! when you do return statement!!!!!!!
        return(<Planet key={index} planet={planet}/>);
    });

    return(
      <>
        <ul>{PlanetComponentList}</ul>
      </>
    );
}

export default PlanetsList;