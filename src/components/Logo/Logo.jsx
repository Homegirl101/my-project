import React from "react";
import "./Logo.css";
import brain from './brain.png';


const Logo = function (){
    return (
        <div>
                <div> <img style= {{paddingTop:'5px', height: 150, width: 150}} src={brain} alt="logo" />
                </div>
        </div>
    )
}

export default Logo;
