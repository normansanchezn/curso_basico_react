import React from 'react';
import logo from './logo.svg';
import './App.css';
// import HolaMundo, { AdiosMundo } from "./components/HolaMundo"
import Saludar from "./components/Saludar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar name="Norman Sánchez" />
        <Saludar name="Android Developer" />
        <Saludar name="Grupo Salinas" />
      </header>
    </div>
  );
}

export default App;
