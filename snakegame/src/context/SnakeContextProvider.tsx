import { useState } from "react";
import SnakeContext from "./snakeContext";

const SnakeContextProvider = ({ children }: any) => {
  const [snakeArr, setSnakeArr] = useState<number[]>([122]);
  const [axis, setAxis] = useState("R");
  const [oldAxis, setOldAxis] = useState("R");
  const [snakeHead, setSnakeHead] = useState(snakeArr[0]);
  const [snakeFood, setSnakeFood] = useState(128);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <SnakeContext.Provider
      value={{
        snakeArr,
        setSnakeArr,
        axis,
        oldAxis,
        setAxis,
        setOldAxis,
        snakeHead,
        setSnakeHead,
        snakeFood,
        setSnakeFood,
        isGameOver,
        setIsGameOver,
        score,
        setScore,
      }}
    >
      {children}
    </SnakeContext.Provider>
  );
};

export default SnakeContextProvider;