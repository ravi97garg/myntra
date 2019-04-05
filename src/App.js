import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/HeaderComponent";
import ControlledCarousel from "./components/CarouselComponent";
import HotDealsComponent from "./components/HotDealsComponent";
import OfferCarouselComponent from "./components/OfferCarouselComponent";
import BrandsComponent from "./components/BrandsComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ControlledCarousel/>
        <HotDealsComponent/>
        <OfferCarouselComponent/>
        <BrandsComponent/>
      </div>
    );
  }
}

export default App;
