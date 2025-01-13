import { createContext } from "react";

const SnakeContext = createContext<{
  snakeArr: number[]; 
  setSnakeArr: React.Dispatch<React.SetStateAction<number[]>>; 
  axis: string;
  oldAxis: string;
  setAxis: React.Dispatch<React.SetStateAction<string>>; 
  setOldAxis: React.Dispatch<React.SetStateAction<string>>; 
  snakeHead: number;
  setSnakeHead: React.Dispatch<React.SetStateAction<number>>
  snakeFood: number;
  setSnakeFood: React.Dispatch<React.SetStateAction<number>>;
  isGameOver: boolean;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}>({
  snakeArr: [124],
  setSnakeArr: () => {},
  axis: "horizontal",
  oldAxis: "horizontal",
  setAxis: () => {},
  setOldAxis: () => {},
  snakeHead: 124,
  setSnakeHead: () => {},
  snakeFood: 100,
  setSnakeFood: () => {},
  isGameOver: false,
  setIsGameOver: () => {},
  score: 0,
  setScore: () => {},
});

export default SnakeContext;
