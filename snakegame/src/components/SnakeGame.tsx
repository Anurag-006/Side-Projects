import GridBox from "./GridBox";
import { SnakeLogic, opp } from "../logic/SnakeLogic";
import { useEffect, useRef, useState } from "react";

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
  const possibleVal = "wasd";
  const { performChange } = SnakeLogic();
  const pressedKeyRef = useRef("");

  const handleKey = (event: KeyboardEvent) => {
    if (event.key) {
      if (event.key === opp(pressedKeyRef.current)) {
        console.log(
          "Opp key Pressed: " + event.key + " and " + pressedKeyRef.current
        );
      } else if (possibleVal.includes(event.key)) {
        pressedKeyRef.current = event?.key;
        setKeyPressed(event.key);
        console.log(
          "Key Pressed is: " +
            event.key +
            " Current Ref is: " +
            pressedKeyRef.current +
            " Current key pressed is: " +
            keyPressed
        );
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  useEffect(() => {
    performChange(keyPressed);
  }, [keyPressed]);

  useEffect(() => {
    const interval = setInterval(() => {
      performChange(keyPressed);
    }, 200);
    return () => clearInterval(interval);
  });

  return (
    <div className="h-screen w-screen justify-center flex">
      <div className="bg-green-600 h-[600px] w-[600px] flex flex-wrap">
        {nums.map((num) => (
          <GridBox key={num} val={num} />
        ))}
      </div>
    </div>
  );
}

export default SnakeGame;