import React, {useState} from "react";
import { motion } from "framer-motion";
import BackgroundImage from "./BackgroundImage";
import { Link } from "react-router-dom";


//destructure motion

const spintransition = {
    loop: Infinity,
    duration: 30
}

 const Sun = () => {
    // const [ rotate, setRotate ] = useState(false);
    return(
            <motion.div  
            animate={{rotate: 360}}//two moition div props using
            transition={spintransition}>
            {<BackgroundImage />}
            </motion.div>


    );
 };
export default Sun;
