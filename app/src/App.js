import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Sobre from './components/Sobre';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <div>
          <Link to="#">Home</Link>
          <Link to="/sobre">Sobre mí</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/proyectos">Proyectos</Link>
          <Link to="/habilidades">Habilidades</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <Routes>
          <Route path='/' Component={Sobre} />
          <Route path='/header' Component={Header} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
