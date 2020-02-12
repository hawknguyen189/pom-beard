import React from "react";
import "../src/Component/CommonUse/FlixCarousel.css"
// import logo from './logo.svg';
import "./App.css";
import Header from "./Container/Header";
import Navigation from "./Container/Navigation";
import Introduction from "./Container/Introduction";
import ProductShow from "./Container/ProductShow";
import Delivery from "./Container/Delivery";
import Testimonials from "./Container/Testimonials";
import Blog from "./Container/Blog";
import Subscription from "./Container/Subscription";
function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        <Introduction />
        <ProductShow />
        <Delivery />
        <Testimonials />
        <Blog />
        <Subscription/>
      </main>
    </div>
  );
}

export default App;
