import React from "react";
import {Button} from "react-bootstrap"

export default function PasarFunciones(props) {

    // Asignación por destructuring
    const { saludarFn, userInfo } = props
    const { nombre = "Sin nombre" } = userInfo

    console.log(props);
    return(
        <div>
            {/* Se usa una función anónima usando: {()=> props.saludarFn(props.userInfo.name)} */}
            <Button onClick={() => saludarFn(nombre)}>Saluldar</Button>
        </div>
    )
}