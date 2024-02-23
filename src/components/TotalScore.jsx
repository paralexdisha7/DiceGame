import React from "react";

const TotalScore = ({score}) => {
  return (
    <div className="text-center">
      <h1 className="text-7xl font-semibold">{score}</h1>
      <p className="font-medium whitespace-nowrap">Total Score</p>
    </div>
  );
};

export default TotalScore;
