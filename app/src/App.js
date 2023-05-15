import React from 'react';
import Nav from './components/Nav';

import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <div className='Header-content'>
        <Header />
        <Nav />
      </div>
    </div>

  );
}

export default App;
