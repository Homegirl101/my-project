import React from "react";
import "./imageLinkForm.css";

const ImageLinkForm = function({onChange, updateState}){
    return(
        <div>
            <p className="f3 center2">{'This will detect faces in your pictures, give it a try'}</p>
            <div style= {{display: 'flex', justifyContent: 'center', }}>
                <div className="pa4 br3 shadow-5 form" style= {{display: 'flex', justifyContent: 'center'}}>
                    <input type="text" className="f4 pa2 w-70 center" onChange={onChange}/>
                    <button className="w-30 grow f4 link pv2 dib white bg-light-purple" onClick={updateState}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm