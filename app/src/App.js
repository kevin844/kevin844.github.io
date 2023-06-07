import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Experiencia from './components/Experiencia';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

import './App.css';

function App() {

  const [show, setShow] = useState("home");

  const handleShow = (component) => {
    setShow(component);
  }

  return (
    <div className='App'>
      <div className='Header-content'>
        <div className="header">
          <strong className="logo-letters">KG</strong>
        </div>
        <div className='nav-links'>
          <button className='btn' onClick={() => handleShow("home")}>Home</button>
          <button className='btn' onClick={() => handleShow("sobre")}>Sobre</button>
          <button className='btn' onClick={() => handleShow("servicios")}>servicios</button>
          <button className='btn' onClick={() => handleShow("proyectos")}>proyectos</button>
          <button className='btn' onClick={() => handleShow("habilidades")}>habilidades</button>
          <button className='btn' onClick={() => handleShow("blog")}>blog</button>
          <button className='btn' onClick={() => handleShow("contacto")}>contacto</button>
        </div>
      </div>
      <div className='body'>
        {show === "home" && <Home />}
        {show === "sobre" && <About />}
        {show === "servicios" && <Experiencia />}
        {show === "proyectos" && <Proyectos />}
        {show === "habilidades" && <Proyectos />}
        {show === "contacto" && <Contacto />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
