import React from "react";

const StartGame = ({ toggle }) => {
  return (
    <div className="container flex-col h-[100vh]  items-center justify-center align-middle  ">
      <div>
        <img
          src="/images/Dice-Free-Download-PNG.png"
          alt="dices"
          className="w-2/3 ml-16"
        />
      </div>
      <div className="flex-col ">
        <h1 className="text-6xl whitespace-nowrap text-center font-semibold my-10">Dice Game</h1>
        <button className="button ml-10" onClick={toggle}>
          Start Game
        </button>
      </div>
    </div>
  );
};

export default StartGame;
