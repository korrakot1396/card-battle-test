import React, { Component } from "react";
import ReactDOM from "react-dom";
import Player from "./player";
import "./styles.css";

const weapons = ["red", "brown", "green", "sky"];
class App extends Component {
  state = {
    playerOne: weapons[0],
    playerTwo: weapons[0],
    winner: ""
  };

  startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
        winner: ""
      });
      if (counter > 5) {
        clearInterval(gameInterval);
        this.setState({
          winner: this.selectWinner()
        });
      }
    }, 100);
  };

  selectWinner = () => {
    const { playerOne, playerTwo } = this.state;

    if (
      (playerOne === "green" && playerTwo === "red") ||
      (playerOne === "brown" && playerTwo === "green") ||
      (playerOne === "sky" && playerTwo === "brown") || 
      (playerOne === "red" && playerTwo === "sky")
    ) {
      // return "Oops it's a Tie!";
      return "You Lose!";
    } else if (
      (playerOne === "red" && playerTwo === "green") ||
      (playerOne === "green" && playerTwo === "brown") ||
      (playerOne === "brown" && playerTwo === "sky") || 
      (playerOne === "sky" && playerTwo === "red")
    ) {
      return "You Wins!";
    } else {
      // return "You Lose!";
      return "Oops it's a Tie!";
    }
  };
  selectWeapon = weapon => {
    this.setState({
      playerOne: weapon,
      winner: ""
    });
  };
  render() {
    const { playerOne, playerTwo, winner } = this.state;
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Color Battle Test</h1>

        <div>
          <Player weapon={playerOne} />
          <Player weapon={playerTwo} />
        </div>
        <div>
          <button
            className="redBtn"
            onClick={() => this.selectWeapon("red")}
          >
            red
          </button>
          <button
            className="brownBtn"
            onClick={() => this.selectWeapon("brown")}
          >
            brown
          </button>
          <button
            className="greenBtn"
            onClick={() => this.selectWeapon("green")}
          >
            green
          </button>
          <button
            className="skyBtn"
            onClick={() => this.selectWeapon("sky")}
          >
            sky
          </button>
        </div>
        <div className="winner">{winner ? this.selectWinner() : null}</div>
        <button type="button" className="startBtn" onClick={this.startGame}>
          Start!
        </button>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
