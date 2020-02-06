import React from "react";
import "../src/Component/CommonUse/FlixCarousel.css"
// import logo from './logo.svg';
import "./App.css";
import Header from "./Container/Header";
import Navigation from "./Container/Navigation";
import Introduction from "./Container/Introduction";
import ProductShow from "./Container/ProductShow";
import Delivery from "./Container/Delivery";
function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        <Introduction />
        <ProductShow />
        <Delivery />
      </main>
    </div>
  );
}

export default App;
