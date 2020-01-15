import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./Container/Header"
import Navigation from "./Container/Navigation";
import Introduction from "./Container/Introduction";
function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Introduction/>
    </div>
  );
}

export default App;
