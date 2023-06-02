import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Experiencia from './components/Experiencia';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

import './App.css';
import Header from './components/Header';
function App() {
  return (
    <div className='App'>
      <div className='Header-content'>
        <Header />
        <Nav />
      </div>
      <div className='body'>
        <Home />
        <About />
        <Experiencia />
        <Proyectos />
        <Contacto />
        <Footer />
      </div>
    </div>
  );
}

export default App;
