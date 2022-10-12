import React from "react";
import "./Logo.css";
import brain from './brain.png';


const Logo = function (){
    return (
        <div>
                <div className="Tilt-inner"> <img style= {{'paddingTop:5px', "width: 150px", "height: 150px;"}} src={brain} alt="logo" />
                </div>
        </div>
    )
}

export default Logo;
