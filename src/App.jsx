import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted(!isGameStarted);
  };
  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
      <p className="opacity-30 font-thin text-sm">@paralexdisha7</p>
    </>
  );
}

export default App;
