import React from "react";

const RollDice = ({ rollDice, currentDice }) => {
  
  return (
    <div className="flex-col ">
      <div onClick={rollDice} className="cursor-pointer">
        <img src={`/images/dice_${currentDice}.png`} alt="" />
      </div>
      <p className="text-center  font-semibold text-lg  p-3">
        Click on the Dice to Roll
      </p>
    </div>
  );
};

export default RollDice;
