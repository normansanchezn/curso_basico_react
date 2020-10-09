import React from "react";

export default function PasarFunciones(props) {

    console.log(props);
    return(
        <div>
            {/* Se usa una función anónima usando: {()=> props.saludarFn(props.userInfo.name)} */}
            <button onClick={() => props.saludarFn(props.userInfo.nombre)}>Saluldar</button>
        </div>
    )
}