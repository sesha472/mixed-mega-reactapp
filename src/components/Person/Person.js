import React from 'react'

import './Person.css';


export default function Person(props) {

    

    return (
        <div className="Person">
            <h3 onClick={props.delet}>USERNAME:{props.name}</h3>
            <input type="text" onChange={props.inputtext}  />
            
        </div>
    )
}
