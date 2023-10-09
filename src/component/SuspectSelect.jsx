import React from "react";

const SuspectSelect = ({onSuspectSelected, suspects}) => {

    const handleChange = (evt) => {
        onSuspectSelected(evt.target.value)
    }

    return (
        
            <select defaultValue="" onChange={handleChange}>
                <option value="" disabled>Choose a suspect</option>
                {suspects.map((suspect, index) => {
                    return (
                        <option key={suspect.uid} value={index}>
                            {suspect.title}
                        </option>)
                })}
            </select>
        
    );
}

export default SuspectSelect;


