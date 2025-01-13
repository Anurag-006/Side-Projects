import { useContext, useEffect, useState } from "react";
import SnakeContext from "../context/snakeContext";

type Props = {
  val: number;
};

function GridBox(props: Props) {
  const GridNo = props.val;
  const [isSnake, setIsSnake] = useState(false);
  const [isSnakeHead, setIsSnakeHead] = useState(false);
  const { snakeArr, snakeHead, snakeFood } = useContext(SnakeContext);
  const [isFood, setIsFood] = useState(false);

  useEffect(() => {
    for (let snakePoint of snakeArr) {
      if (props.val === snakeFood) {
        setIsFood(true);
        if (props.val === snakeHead) {
          setIsSnakeHead(true);
        }
      } else {
        if (props.val === snakeHead) {
          setIsSnakeHead(true);
          setIsFood(false);
        } else if (props.val === snakePoint) {
          setIsSnake(true);
          setIsSnakeHead(false);
          setIsFood(false);
          break;
        } else {
          setIsSnake(false);
          setIsSnakeHead(false);
          setIsFood(false);
        }
      }
    }
  }, [snakeArr, snakeHead]);

   const gridColor = //isFood
//     ? isSnakeHead
//       ? "bg-black h-[40px] w-[40px]"
//       : "bg-red-500 rounded-xl h-[40px] w-[40px]"
//     : isSnakeHead
//     ? "bg-black h-[40px] w-[40px] rounded-xl"
//     : isSnake
//     ? "bg-blue-400 rounded-xl h-[40px] w-[40px]"
     GridNo % 2 == 1
    ? "bg-green-600 h-[40px] w-[40px]"
    : "bg-green-400 h-[40px] w-[40px]";

  return (
    <div className={`${gridColor} items-center flex justify-center`}>
        {
        isFood
            ? isSnakeHead
      ? <div className="bg-black h-[40px] w-[40px]" > </div>
      : <div className="bg-red-500 h-[40px] w-[40px]"></div>
    : isSnakeHead
    ? <div className="bg-black h-[40px] w-[40px]"> </div>
    : isSnake
    ? <div className="bg-blue-600 h-[40px] w-[40px]"> </div>
    : null
    // : GridNo % 2 == 1
    // ? <div className="bg-green-600 h-[40px] w-[40px]"> </div>
    // : <div className="bg-green-400 h-[40px] w-[40px]"> </div>
           
        }
    </div>
  );
}

export default GridBox;
