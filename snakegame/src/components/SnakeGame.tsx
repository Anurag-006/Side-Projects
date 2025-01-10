import GridBox from "./GridBox";
import { SnakeLogic } from "../logic/snakeLogic";
import { useEffect, useState } from "react";

function SnakeGame() {

  function generateNums() {
    const arr = [];
    for (let i = 0; i < 225; i++) {
      arr.push(i);
    }
    return arr;
  }
  const nums = generateNums();
  const [keyPressed, setKeyPressed] = useState("");
  const {performChange} = SnakeLogic();

  useEffect(()=>{
    const handleKey = (event:KeyboardEvent) => {

      setKeyPressed(event.key);
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
    }
  },[])

  useEffect(() => {
    if (keyPressed) {
        performChange(keyPressed);
    }
  },[keyPressed])

  return (
    <div className="h-screen w-screen justify-center flex" >
      <div className="bg-green-600 h-[600px] w-[600px] flex flex-wrap">
        {nums.map((num) => (
          <GridBox key={num} val={num} />
        ))}
      </div>
    </div>
  );
}

export default SnakeGame;