import React from "react";

export default function SaludarConObjetos(props){

    console.log(props);

    return(
        <div>
            <h2>
                {props.userInfo.nombre}, tiene {props.userInfo.edad} y es un {props.userInfo.ocupacion}
            </h2>
        </div>
    )
}