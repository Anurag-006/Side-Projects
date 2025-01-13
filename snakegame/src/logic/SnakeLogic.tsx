import { useContext } from "react";
import SnakeContext from "../context/snakeContext";

function SnakeLogic() {
  let {
    axis,
    snakeHead,
    snakeArr,
    setAxis,
    setSnakeHead,
    setSnakeArr,
    snakeFood,
    setSnakeFood,
    setIsGameOver,
    score,
    setScore,
  } = useContext(SnakeContext);
  
  const possibleVals = ["w", "a", "s", "d"];

  const handleMovement = (keyPressed: string) => {
    if (
      keyPressed === "w" ||
      keyPressed === "a" ||
      keyPressed === "s" ||
      keyPressed === "d"
    ) {

      let newAxis = findAxis(keyPressed);
      if (axis !== opp(newAxis)) {
        const newHead = findHead(keyPressed, snakeHead);

        if (snakeArr.includes(newHead)) {
          setIsGameOver(true);
        } else {
            if (newHead === snakeFood) {
              const newArr = getNewArr(snakeArr);
              const newFoodLoc = newFood(newArr);
              setSnakeFood(newFoodLoc);
              setScore(score+1);
              let newSnakeArr = [newHead, ...snakeArr];
              setSnakeHead(newHead);
              setSnakeArr(newSnakeArr);
              setAxis(newAxis);
            } else {
              let newArr = [newHead, ...snakeArr];
              newArr.pop();
              setSnakeHead(newHead);
              setSnakeArr(newArr);
              setAxis(newAxis);
            }
        }
      }
    }
  };

  const performChange = (keyPressed: string) => {
    if (possibleVals.includes(keyPressed))
      handleMovement(keyPressed);
  }
  return { performChange };
}

function getNewArr(arr: number[]): number[] {
  const newArr = [];
  for (let i = 0; i < 225; i++) {
    if (arr.includes(i)) {
      continue;
    } else {
      newArr.push(i);
    }
  }
  return newArr;
}

function newFood(arr: number[]): number {
  const l = arr.length;
  const rand = Math.floor(Math.random() * (l + 1));
  return arr[rand];
}
function findHead(keyPressed: string, sHead: number): number {
  const newHead =
    keyPressed === "w"
      ? sHead - 15
      : keyPressed === "s"
      ? sHead + 15
      : keyPressed === "a"
      ? sHead - 1
      : keyPressed === "d"
      ? sHead + 1
      : sHead;

  return newHead;
}

function opp(inp: string) {
  switch (inp) {
    case "w":
      return "s";
    case "a":
      return "d";
    case "s":
      return "w";
    case "d":
      return "a";
  }
}

function findAxis(inp: string) {
  if (inp === "a" || inp === "d") {
    return "horizontal";
  } else if (inp === "w" || inp === "s") {
    return "vertical";
  } else {
    return "";
  }
}

export { SnakeLogic, findAxis, opp };
