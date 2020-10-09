import React from "react";

export default function PasarFunciones(props) {

    // Asignación por destructuring
    const { saludarFn, userInfo } = props
    const { nombre = "Sin nombre" } = userInfo

    console.log(props);
    return(
        <div>
            {/* Se usa una función anónima usando: {()=> props.saludarFn(props.userInfo.name)} */}
            <button onClick={() => saludarFn(nombre)}>Saluldar</button>
        </div>
    )
}