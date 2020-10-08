import React from "react";

export default function HolaMundo() {

    // Aquí se pone JS
    const consolePrint=()=>{
        console.log("Hola")
    }

    return (
        <div>
            <h1>Hola Mundo</h1>
            <h2>Norman Sánchez</h2>
        </div>
    )
}

export function AdiosMundo(){
    return(
        <div>
            <h1>Adios</h1>
        </div>
    )
}