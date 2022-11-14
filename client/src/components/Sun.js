import React, {useState} from "react";
import { motion } from "framer-motion";
import BackgroundImage from "./BackgroundImage";

//destructure motion

const spintransition = {
    loop: Infinity,
    duration: 35
}

 const Sun = () => {
    // const [ rotate, setRotate ] = useState(false);
    return(
       <motion.div  animate={{rotate: 360}}//two moition div props using
                    transition={spintransition}>
            {<BackgroundImage />}
        </motion.div>
      
    );
 };
export default Sun;