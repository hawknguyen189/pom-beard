import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./Container/Header";
import Navigation from "./Container/Navigation";
import Introduction from "./Container/Introduction";
import ProductShow from "./Container/ProductShow";
function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        <Introduction />
        <ProductShow />
      </main>
    </div>
  );
}

export default App;
