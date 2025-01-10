import { useContext } from "react";
import SnakeContext from "../context/snakeContext";

function SnakeLogic() {
  let { axis, snakeHead, snakeArr, setAxis, setSnakeHead, setSnakeArr } =
    useContext(SnakeContext);

    const performChange = (keyPressed:string) => {
        console.log("Inside Perform Change");
        
        let newAxis = findAxis(keyPressed);
        if (axis !== newAxis) {
          const newHead = findHead(keyPressed, snakeHead);
          let newArr = [newHead, ...snakeArr];
          newArr.pop();
          setSnakeHead(newHead);
          setSnakeArr(newArr);
          setAxis(newAxis);
        }
      }

  return {performChange}
}

function findHead(keyPressed:string, sHead:number):number {
    const newHead = 
    keyPressed === "w"
    ? sHead - 15
    : keyPressed === "s"
    ? sHead + 15
    : keyPressed === "a"
    ? sHead - 1
    : keyPressed === "d"
    ? sHead + 1
    : sHead

    return newHead;
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

export {SnakeLogic, findAxis}