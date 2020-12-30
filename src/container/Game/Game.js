import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import Stripe from "../../components/Stripe/Stripe";
import SquareList from "../../components/SquareList/SquareList";
import ScoreBoard from "../../components/ScoreBoard/ScoreBoard";
import "./Game.css";
import axios from "axios";
import openSocket from "socket.io-client";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      colors: [],
      winningColor: "",
      headingColor: "",
      currentScore: 0,
      currentMode: {},
      chances: 5,
      isEnd: false,
      highScores: [],
    };
  }

  MODES = [
    {
      label: "easy",
      numSquares: 3,
      score: 0,
    },
    {
      label: "medium",
      numSquares: 6,
      score: 10,
    },
    {
      label: "hard",
      numSquares: 9,
      score: 20,
    },
  ];

  componentDidMount() {
    const mode = this.MODES[0];
    const colors = this.generateRandomColors(mode.numSquares);
    const winningColor = this.pickWinner(colors);
    this.setState({
      currentMode: mode,
      colors: colors,
      winningColor: winningColor,
      message: "Guess The Color",
      headingColor: "steelblue",
    });
    const socket = openSocket("http://localhost:5000");
    socket.on("games", (data) => {
      this.setState({ highScores: data.highscores });
    });
    axios
      .get("/api/highscores")
      .then((res) => {
        this.setState({ highScores: res.data.highscores });
      })
      .catch((err) => console.log(err));
  }

  onColorClick = async (event, color) => {
    const nextMode = this.MODES.find(
      (element) => element.numSquares === this.state.currentMode.numSquares + 3
    );
    if (color === this.state.winningColor) {
      if (!nextMode && this.state.chances > 1) {
        await this.setState((prevState, props) => ({
          isEnd: true,
          currentScore: prevState.currentScore + prevState.currentMode.score,
          message: `You have won the game! Congrats Thao`,
          colors: this.state.colors.fill(this.state.winningColor),
          headingColor: this.state.winningColor,
        }));
        this.saveGame(true);
        return;
      } else {
        const colors = this.generateRandomColors(nextMode.numSquares);
        const winningColor = this.pickWinner(colors);
        this.setState((prevState, props) => ({
          message: `Correct! Moving on to next level!`,
          currentMode: nextMode,
          currentScore: prevState.currentScore + nextMode.score,
          colors: colors,
          winningColor: winningColor,
        }));
      }
    } else {
      if (this.state.chances <= 1) {
        this.setState({
          message: "You lost!",
          isEnd: true,
        });
        this.saveGame(false);
        return;
      } else {
        this.setState((prevState, props) => ({
          currentScore:
            prevState.currentScore <= 3 ? 0 : prevState.currentScore - 3,
          message: "Try Again!",
          chances: prevState.chances === 0 ? 0 : prevState.chances - 1,
        }));
      }
    }
  };

  saveGame = (isWinner) => {
    if (this.props.auth.isAuthenticated) {
      const game = {
        score: this.state.currentScore,
        level: this.state.currentMode.label,
        username: this.props.auth.user.name,
        date: new Date().toISOString(),
        isWinner: isWinner,
      };
      console.log("save game", game);
      axios
        .post("/api/games", game)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  onButtonClick = (event, mode) => {
    const colors = this.generateRandomColors(mode.numSquares);
    const winningColor = this.pickWinner(colors);
    this.setState({
      currentMode: mode,
      colors: colors,
      winningColor: winningColor,
      message: "Guess The Color",
      headingColor: "steelblue",
    });
  };

  render() {
    const statusEntries = [
      {
        title: "Current Score",
        content: this.state.currentScore,
      },
      {
        title: "Chances",
        content: this.state.chances,
      },
    ];
    const highScoreEntries = [];
    this.state.highScores.forEach((game) => {
      highScoreEntries.push({
        title: game.username,
        content: game.score,
      });
    });

    return (
      <div className="Game">
        <Header
          headingColor={this.state.headingColor}
          colorValue={this.state.winningColor}
        />
        <Stripe
          modes={this.state.modes}
          currentMode={this.state.currentMode}
          message={this.state.message}
          onButtonClick={this.onButtonClick}
        />
        <div className="layout">
          <ScoreBoard label="Status" entries={statusEntries} />
          <SquareList
            isEnd={this.state.isEnd}
            colors={this.state.colors}
            onColorClick={this.onColorClick}
          />
          <ScoreBoard label="High Scores" entries={highScoreEntries} />
        </div>
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
  };
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, null)(Game);
