import React from "react";
//import Tilt from "react-tilt";
import "./Logo.css";
import brain from './brain.png';


const Logo = function (){
    return (
        <div>
                <div> <img style= {{paddingTop:'5px', height: '150px', width: '150px'}} src={brain} alt="logo" />
                </div>
        </div>
    )
}

export default Logo;
