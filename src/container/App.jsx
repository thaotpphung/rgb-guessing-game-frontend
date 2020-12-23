import React, { Component } from "react";
import Heading from "../components/Heading/Heading";
import Stripe from "../components/Stripe/Stripe";
import SquareList from "../components/SquareList/SquareList";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    // configure levels
    this.state = {
      message: "",
      colors: [],
      winningColor: '',
      headingColor: '',
      modes: [
        {
          label:'easy',
          numSquares: 3
         },
         {
          label: 'medium',
          numSquares: 6
         }, 
         {
          label: 'hard',
          numSquares: 9
         },
        //  {
        //   label: 'superhard',
        //   numSquares: 12
        //  },
        //  {
        //   label: 'megahard',
        //   numSquares: 15
        //  },
        //  {
        //   label: 'ultrahard',
        //   numSquares: 18
        //  }
        ],
      currentMode: {}
    }
  }

  componentDidMount() {
    this.onButtonClick(null, {
      label: 'medium',
      numSquares: 6
     }
    );
  }

  onColorClick = (event, color) => {
    if (color === this.state.winningColor) {
      this.setState(
        { 
          message: "Correct!",
          headingColor: this.state.winningColor,
          colors: this.state.colors.fill(this.state.winningColor)
        }
      );
    } else {
      this.setState(
        { 
          message: "Try Again!",
        }
      );
    }
  }

  onButtonClick = (event, mode) => {
    const colors = this.generateRandomColors(mode.numSquares);
    const winningColor = this.pickWinner(colors);
    this.setState({ colors });
    this.setState({ winningColor });
    this.setState({ currentMode: mode });
    this.setState({ message: "Guess The Color" });
    this.setState({ headingColor: "steelblue" });
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
          modes = {this.state.modes}
          currentMode = {this.state.currentMode}
          message = {this.state.message}
          onButtonClick = {this.onButtonClick}
        />
        <SquareList
          colors = {this.state.colors}
          onColorClick = {this.onColorClick}
        />
      </div>
    );
  }

  //generate a number of random colors and place into "colors" state, choose a random winning color
  generateRandomColors = (numSquares) => {
    let colors = [];
    let r = "";
    let g = "";
    let b = "";
    for (let i = 0; i < numSquares; i++) {
      r = Math.floor(Math.random() * 256);
      g = Math.floor(Math.random() * 256);
      b = Math.floor(Math.random() * 256);
      colors.push("rgb(" + r + ", " + g + ", " + b + ")");
    }
    return colors;
  };

  // pick a random color out of given colors as winning color
  pickWinner = (colors) => {
    return colors[Math.floor(Math.random() * colors.length)];
  }

}
    
export default App;
