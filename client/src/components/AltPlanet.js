import React from "react";
import Planet from "./Planet";
import PlanetContainer from "../containers/PlanetsContainer";

const AltPlanet = () => (
  <div>
    <h4>Alternate Planet Page</h4>
    <p>Spin</p>
    <PlanetContainer/>
  </div>
);

export default AltPlanet;

// const PlanetsList = ({planets}) => {
//     //turn arr of obj into list of Planet components
//     const PlanetComponentList = planets.map( (planet, index) => {
//         //Always put in round brackets!!!!!! when you do return statement!!!!!!!
//         return(<Planet key={index} planet={planet}/>);
//     });

//     return(
//       <>
//         <ul>{PlanetComponentList}</ul>
//       </>
//     );
// }



// import React from "react";
// import PlanetContainer from "../containers/PlanetsContainer";

// const Learning = () => (
//   <div>
//     <h4>Learning recources</h4>
//     <p>Choose your favourite planet.Extend your knowledge</p>
//     <PlanetContainer />
//   </div>
// );

// export default Learning;