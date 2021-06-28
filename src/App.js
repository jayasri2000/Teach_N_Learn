import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Me from './components/me';
import Offer from './components/Offer';
import Contact from './components/Contact';

import Content from './components/Content';
import Login from './components/Authenticate.js';


function App() {
  return (
    <div className="App">
     <Navbar>
      </Navbar>
      <header className="App-header">
     
      <Home></Home>
      
    
      
      </header>
      
      <Me></Me>
      <Offer></Offer>
      <Content></Content>
      <Login></Login>
      <Contact></Contact>
     
    </div>
  );
}

export default App;
