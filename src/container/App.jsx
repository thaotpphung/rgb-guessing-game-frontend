import React, { Component } from "react";
import Heading from "../components/Heading/Heading";
import Stripe from "../components/Stripe/Stripe";
import SquareList from "../components/SquareList/SquareList";
import "./App.css";

class App extends Component {
  state = {
    message: "",
    colors: [],
    winningColor: '',
    headingColor: ''
  };

  componentDidMount() {
    this.randomColorGen(6);
  }

  //render The Color Game
  render() {
    return (
      <div>
        <Heading
          headingColor={this.state.headingColor}
          colorValue={this.state.winningColor}
        />
        <Stripe
          message = {this.state.message}
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
    winningColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ colors });
    this.setState({ winningColor });
    this.setState({ message: "Guess The Color" });
    this.setState({ headingColor: "steelblue" });
  };

  onWinningViewChange = (clickedColor) => {
    this.setState(
      { 
        message: "Correct!",
        headingColor: this.state.winningColor,
        colors: this.state.colors.fill(this.state.winningColor)
      }
    );
  }

  onLosingViewChange = (clickedColor) =>  {
    this.setState({ message: "Try Again!" });
  }
}
    
export default App;
