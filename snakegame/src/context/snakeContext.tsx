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
}>({
  snakeArr: [124],
  setSnakeArr: () => {},
  axis: "horizontal",
  oldAxis: "horizontal",
  setAxis: () => {},
  setOldAxis: () => {},
  snakeHead: 124,
  setSnakeHead: () => {},
});

export default SnakeContext;
