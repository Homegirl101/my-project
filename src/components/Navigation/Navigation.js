import React from "react";

const Navigation = function ({onRouteChange, isSignedIn}){
    
    if(isSignedIn){
        return(
        <nav className="center pa3">
            <p onClick={() => onRouteChange("signin")} style= {{cursor: 'pointer'}}> Sign Out</p>
        </nav>
        )
    } else {
        return(
        
            <nav className="center pa3">
                <p onClick={() => onRouteChange("home")}> Sign in</p>
                <p onClick={() => onRouteChange("home")}> Register</p>
            </nav>

        )
    }
    
}

export default Navigation