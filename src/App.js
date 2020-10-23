import React, { Component } from "react";
import "./App.css";
import DisplayColor from "./components/DisplayColor/DisplayColor";
import Stripe from "./components/Stripe/Stripe";
import SquareList from "./components/SquareList/SquareList";


class App extends Component {
  constructor(){
    super(); // call constructor method on componenent class 
    this.state = {
      colors: this.generateRandomColors(6),
      isEasyMode: false
    }
  };

  randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from  0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from  0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  generateRandomColors(num){
    //make an array
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++){
      //get random color and push into arr
      arr.push(this.randomColor())
    }
    //return that array
    return arr;
  }

  onEasyModeChange = (event) => {
    this.setState(
      {
        isEasyMode: true,
        colors: this.generateRandomColors(3)
      }
    )
  }

  onHardModeChange = (event) => {
    this.setState(
      {
        isEasyMode: false,
        colors: this.generateRandomColors(6)
      }
    )
  }

  render() {
    const { colors, isEasyMode } = this.state;
    return (
      <div className="App">
        <DisplayColor />
        <Stripe isEasyMode = {isEasyMode} onEasyModeChange = {this.onEasyModeChange} onHardModeChange = {this.onHardModeChange}/>
        <SquareList colors={colors}/>
      </div>
    );
  }
}

export default App;
