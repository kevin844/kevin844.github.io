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
          <button className='btn' onClick={() => handleShow("sobre")}>About</button>
          <button className='btn' onClick={() => handleShow("experiencia")}>Experiene</button>
          <button className='btn' onClick={() => handleShow("proyectos")}>Projects</button>
          <button className='btn' onClick={() => handleShow("habilidades")}>Skills</button>
          <a href="https://kevin8440.github.io/blog/" target="_blank" rel="noopener noreferrer" className='btn'>Blog</a>
          <button className='btn' onClick={() => handleShow("contacto")}>Contact</button>
        </div>
      </div>
      <div className='body'>
        {show === "home" && <Home />}
        {show === "sobre" && <About />}
        {show === "experiencia" && <Experiencia />}
        {show === "proyectos" && <Proyectos />}
        {show === "habilidades" && <Proyectos />}
        {show === "contacto" && <Contacto />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
