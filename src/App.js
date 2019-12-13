import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Example from "./Component/foo";
import Header from "./Container/Header"
import Navigation from "./Container/Navigation";
function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Example/>
    </div>
  );
}

export default App;
