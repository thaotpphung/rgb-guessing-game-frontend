import React, { Component } from "react";
import Heading from "../components/Heading/Heading";
import Stripe from "../components/Stripe/Stripe";
// import Square from "../components/Square/Square";
import SquareList from "../components/SquareList/SquareList";
import "./App.css";

class App extends Component {
  state = {
    message: "Guess The Color",
    colors: [],
    winningColor: [],
    headingColor: "steelblue",
  };

  //render The Color Game
  render() {
    return (
      <div>
        <Heading
          headingColor={this.state.headingColor}
          colorValue={this.state.winningColor}
          message={this.state.message}
        />
        <Stripe
          onEasyModeChange={() => this.randomColorGen(3)}
          onHardModeChange={() => this.randomColorGen(6)}
        />
        <SquareList
          colors = {this.state.colors}
          winningColor = {this.state.winningColor}
          onWinningViewChange = {() => this.onWinningViewChange}
          onLosingViewChange = {() => this.onLosingViewChange}
        />
      </div>
    );
  }

  //generate a number of random colors and place into "colors" state, choose a random winning color
  randomColorGen = (numSquares) => {
    let colors = [];
    let winningColor = "";
    let r = "";
    let g = "";
    let b = "";
    for (let i = 0; i < numSquares; i++) {
      r = Math.floor(Math.random() * 256);
      g = Math.floor(Math.random() * 256);
      b = Math.floor(Math.random() * 256);
      colors.push("rgb(" + r + ", " + g + ", " + b + ")");
    }
    this.setState({ colors });
    winningColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ winningColor });
    this.setState({ message: "Guess The Color" });
    this.setState({ headingColor: "steelblue" });
  };

  onWinningViewChange = (clickedColor) => {
    this.setState({ message: "Correct!" });
    this.setState({ headingColor: this.state.winningColor }); 
  }

  onLosingViewChange = (clickedColor) =>  {
    this.setState({ message: "Try Again" });
  }
}
    
export default App;
