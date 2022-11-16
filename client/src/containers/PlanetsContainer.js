import React,{ useState, useEffect } from "react";

import Planet from "../components/Planet";
import PlanetSelector from "../components/PlanetSelector";
// import PlanetsList from "../components/PlanetsList";
import PlanetsService from "../services/PlanetsService";

const PlanetContainer = () => {
   //state - all planets
   const [ planets, setPlanets ] = useState([]);
  // console.log("planets :",planets[0]);



   //another state - selected planet
   const [ selectedPlanet, setSelectedPlanet ] = useState(null);
   //console.log("one selected planet",selectedPlanet);

   //another state - futher fetch to grab selected planet image
   const [ selectedImage, setSelectedImage ] = useState(null);

   //side effect
  //fetch the planets
   useEffect(() => {
    PlanetsService.getPlanets()
      .then(p => setPlanets(p))
  }, [])


  //onPlanetSelected - callback func passed down sa prop..get id..coming back ..define it here..invoke ot there
//console.log(planets);

function findPlanetBy_id(_id){
       return planets.find((planet) => {
            return planet._id === _id
        });
      
}

const onPlanetSelected = function(_id){
    const planet = findPlanetBy_id(_id);
    //update selected planet..give it to Planet component
    setSelectedPlanet(planet);
    
    //update selectedImage ..after we got the selected planet
    fetch(planet.img)
    .then(res => res.blob())
    .then(data => URL.createObjectURL(data))
    .then(result => setSelectedImage(result))

    //updte content
    //console.log(planet.source);
    // fetch(planet.source)
    // .then(res => res.json())
    // .then(result => setContent(result))

    // console.log(content);

}



// const Box = styled.div`
// background-color: black;
// `


    return(
        <div>
          {/* <PlanetsList planets={planets}/>   --- show planets by list */} 
          <PlanetSelector planets={planets} onPlanetSelected={onPlanetSelected}/>
          {selectedPlanet ? <Planet selectedPlanet={selectedPlanet} selectedImage={selectedImage}/> : null}
        </div>
    );
}

export default PlanetContainer;