import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/learning">Learn about planets</Link>
      </li>  
      <li>
        <Link to="/quiz">get quizz</Link>
      </li>  
      <li>
        <Link to="/altplanet">Alternate Planets</Link>
      </li>  
    </ul>
  );
}

export default NavBar;