// let snakeArr:number[] = [124];
// let snakeHead = 124;
// let keyPressed = "";
// let direction = "";
// let oldDirection = "";
const gridSize = 15;

export const crazySnake = (e:KeyboardEvent, snakeArr:number[], snakeHead:number, direction:string, oldDirection:string, setSnake:any, setSnakeHead:any, setDirection:any) => {
  const keyPressed = e.key;

  const newD =
    keyPressed === "w"
      ? "U"
      : keyPressed === "s"
      ? "D"
      : keyPressed === "a"
      ? "L"
      : keyPressed === "d"
      ? "R"
      : direction;

      if (axis(newD) !== axis(direction)) {
        const obj = performChange(keyPressed, snakeArr, snakeHead, newD, setSnake, setSnakeHead);
        return obj;
      }
};


function axis(inp: string) {
    if (inp === "a" || inp === "d" || inp === "L" || inp === "R") {
      return "horizontal";
    } else if (inp === "w" || inp === "s" || inp === "U" || inp === "D") {
      return "vertical";
    } else {
      return null;
    }
  }


function performChange(inp: string, snakeArr:number[], snakeHead:number, newD:string, setSnake:any, setSnakeHead:any) {
  let newHead = 0;
  if (inp === "w" || inp === "a" || inp === "s" || inp === "d") {
    switch (inp) {
      case "w":
        {
          newHead = snakeHead - gridSize;
        }
        break;
      case "s":
        {
          newHead = snakeHead + gridSize;
        }
        break;
      case "a":
        {
          newHead = snakeHead - 1;
        }
        break;
      case "d":
        {
          newHead = snakeHead + 1;
        }
        break;
    }
    console.log("inside performChange");
    console.log(
      "Key Pressed is: " + inp + " So the Direction is: " + newD
    );
    newHead;
    // setSnakeHead(newHead);
    let copyArr:number[] = [newHead, ...snakeArr];
    copyArr.pop();
    console.log("CopyArr is: " + copyArr);
    
    console.log("New head is: " + snakeHead);

    return {copyArr, newHead, newD}
  }
}