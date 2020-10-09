import React from "react";

export default function Saludar(props){

    console.log(props.name);

    return(
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}