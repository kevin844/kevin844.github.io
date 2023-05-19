import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';


function Nav() {
    return (
        <Router>
            <div>
                <div className='nav-links'>
                    <Link to="/#">Home</Link>
                    <Link to="/#sobre">Sobre mí</Link>
                    <Link to="/servicios">Servicios</Link>
                    <Link to="/proyectos">Proyectos</Link>
                    <Link to="/habilidades">Habilidades</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/Contacto">Contactos</Link>
                </div>
                <Routes>
                    <Route path='#' />
                    <Route path='/$sobre' Component={Header} />
                </Routes>
            </div>
        </Router>
    );
}
export default Nav;