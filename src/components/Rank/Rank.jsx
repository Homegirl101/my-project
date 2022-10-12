import React from "react";

const Rank = function(user){
    return(
        <div>
            <div className="white f3 center2">{`${user} your current rank is ... `}</div>
            <div className="white  center2 f1">{'#5'}</div>

        </div>
    )
}

export default Rank