import SnakeGame from "./components/SnakeGame";
import { useContext, useEffect } from "react";
import SnakeContext from "./context/snakeContext";

function App() {
  const { isGameOver, score } = useContext(SnakeContext);
  useEffect(() => {
    const highestScore = window.localStorage.getItem("MY_SNAKEGAME_HIGH_SCORE");
    if (highestScore && score > Number.parseInt(highestScore)) {
      window.localStorage.setItem("MY_SNAKEGAME_HIGH_SCORE", score.toString());
    }
    if (!highestScore) {
      window.localStorage.setItem("MY_SNAKEGAME_HIGH_SCORE", score.toString());
    }
  }, [score]);

  return (
    <div>
      <div className="flex m-5 flex-col items-center h-screen bg-[#1a1a1a]">
        <h1 className="bg-blue-300 text-center text-4xl p-4 m-10 mt-5">
          This is Snake Game
        </h1>
        {isGameOver ? (
          <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl text-red-600 bg-yellow-500 text-center h-fit p-4 w-3/6 rounded-xl rounded-b-none">
              Game Over
            </h1>
            <div className="bg-yellow-900 h-1/6 w-3/6 text-center text-3xl text-white justify-evenly flex rounded-xl rounded-t-none">
              <div className="m-5">Current Score: {score}</div>
              <div className="m-5">
                Highest Score:{" "}
                {window.localStorage.getItem("MY_SNAKEGAME_HIGH_SCORE")}
              </div>
            </div>
          </div>
        ) : (
          <SnakeGame />
        )}
      </div>
    </div>
  );
}

export default App;
