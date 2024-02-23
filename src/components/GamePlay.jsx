import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");

  const generateRandomNumber = (min, max) => {
    // console.log(Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rollDice = () => {
    if (!selectedNumber) {
      setError("Number is Not Selected !!!");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - randomNumber);
    }
    setSelectedNumber(undefined);
  };

  return (
    <main>
      <div className=" items-start mt-10 space-y-14">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <div className="container justify-center">
        <RollDice currentDice={currentDice} rollDice={rollDice} />
      </div>
      <div className="flex justify-center -my-10">
        <button className="button" onClick={() => setScore(0)}>Reset Score</button>
    </div>
    </main>
  );
};

export default GamePlay;
