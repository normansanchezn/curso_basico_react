import React from 'react';
import logo from './logo.svg';
import './App.css';
// import HolaMundo, { AdiosMundo } from "./components/HolaMundo"
// import Saludar from "./components/Saludar"
// import SaludarConObjetos from "./components/SaludarConObjetos"
import PasarFunciones from "./components/PasarFunciones"

function App() {

  const user = {
    nombre: "Norman",
    edad: "26 años",
    ocupacion: "Android Developer"
  }

  // Esta función recibe un nombre pero este nombre se le pasa en el componente
  const saludarFn = (name) => {
    console.log("Hola " + name);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Saludar name="Norman Sánchez" /> */}
        {/* <Saludar name="Android Developer" />
        <Saludar name="Grupo Salinas" /> */}
        {/* <SaludarConObjetos userInfo={user}/> */}
        <PasarFunciones userInfo={user} saludarFn={saludarFn}/>

      </header>
    </div>
  );
}

export default App;
