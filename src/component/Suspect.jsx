import React from "react";

const Suspect = ({suspect}) => {
   
    return (
        <>
        <h3>{suspect.title}</h3>
        <h4>{suspect.description}</h4>
        <p>{suspect.sex}</p>
        <p>{suspect.weight}</p>
        <p>{suspect["race_raw"]}</p>
        <p>{suspect.details}</p>
        <img className="suspect" src={suspect.images[0].thumb}/>
        <h5>{suspect["warning_message"]}</h5>
        </>
      );
}
 
export default Suspect;