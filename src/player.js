import React from "react";
import green from "./assets/green.png";
import brown from "./assets/brown.png";
import red from "./assets/red.png";
import sky from "./assets/sky.jpg";

const Player = ({ weapon }) => (
  <>
    <div className="player">
      <img
        className="player-image"
        src={
          weapon === "red" ? red : weapon === "green" ? green : weapon === "brown" ? brown : sky
        }
        alt="Red Brown Green Sky"
      />
    </div>
  </>
);

export default Player;
