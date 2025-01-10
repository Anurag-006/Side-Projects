import { useContext } from "react";
import SnakeContext from "../context/snakeContext";

const gridSize = 15;

export const getCoordinates = (num: number) => {
  const row = Math.floor(num / gridSize);
  const col = num % gridSize;

  console.log({ row, col });

  return { row, col };
};

const useSnakeMovement = () => {
  const { snake, setSnake, snakeHead, setSnakeHead } = useContext(SnakeContext);

  function axis(inp: string) {
    if (inp === "a" || inp === "d" || inp === "L" || inp === "R") {
      return "horizontal";
    } else if (inp === "w" || inp === "s" || inp === "U" || inp === "D") {
      return "vertical";
    } else {
      return null;
    }
  }

  function performChange(inp: string | null, newDir: string) {
    let newHead = 0;
    if (inp === "w" || inp === "a" || inp === "s" || inp === "d") {
      switch (inp) {
        case "w":
          {
            newHead = snakeHead - gridSize;
            setSnakeHead(newHead);
          }
          break;
        case "s":
          {
            newHead = snakeHead + gridSize;
            setSnakeHead(newHead);
          }
          break;
        case "a":
          {
            newHead = snakeHead - 1;
            setSnakeHead(newHead);
          }
          break;
        case "d":
          {
            newHead = snakeHead + 1;
            setSnakeHead(newHead);
          }
          break;
      }
      console.log("inside performChange");

      setSnake((prevSnake) => {
        const copyArr = [newHead, ...prevSnake];
        copyArr.pop();
        console.log("CopyArr is: " + copyArr);

        return copyArr;
      });

      // Update snake head position

      console.log("New head is: " + newHead + "Snake head is: " + snakeHead);

      console.log("Key Pressed is: " + inp + " So the Direction is: " + newDir);
    }
  }

  const moveSnake = (inp: string, dirInp: string, oldDir: string) => {
    console.log("Inside moveSnake");

    console.log("Direction before Perform Change is: " + dirInp);

    if (axis(dirInp) !== axis(oldDir)) {
      performChange(inp, dirInp);
    }

    console.log("Snake arr is: " + snake);
  };
  return { moveSnake };
};

export { useSnakeMovement };
