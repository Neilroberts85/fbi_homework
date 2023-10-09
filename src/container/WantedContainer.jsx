import React, { useState, useEffect} from "react";
import Heading from "../component/Heading";
import SuspectSelect from "../component/SuspectSelect";
import Suspect from "../component/Suspect";

const WantedContainer = () => {
    
    const [suspects, setSuspects] = useState([])
    const [selectedSuspect, setSelectedSuspect] = useState("")

    useEffect(() => {
        getSuspects()
      }, [])

    const getSuspects = () => {
        fetch("https://api.fbi.gov/@wanted?pageSize=100&page=1&sort_on=modified&sort_order=desc")
        .then(result => result.json())
        .then(suspectData => setSuspects(suspectData.items))
    }   

    const handleSuspectSelected = (uid) => {
        setSelectedSuspect(suspects[uid])
    }
    
    return (
        <>
        <Heading/>
        <SuspectSelect suspects={suspects} onSuspectSelected={handleSuspectSelected}/>
        {selectedSuspect ? <Suspect suspect={selectedSuspect}/> : null}
        </>
      );
}
 
export default WantedContainer;