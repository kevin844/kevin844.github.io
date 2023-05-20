import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';

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
      </div>
    </div>
  );
}

export default App;
