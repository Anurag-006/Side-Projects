import { useContext, useEffect, useState } from "react";
import SnakeContext from "../context/snakeContext";

type Props = {
    val: number
}

function GridBox(props:Props) {
    const GridNo = props.val;
    const [isSnake, setIsSnake] = useState(false);
    const [isSnakeHead, setIsSnakeHead] = useState(false);
    const { snakeArr, snakeHead } = useContext(SnakeContext);

    useEffect(()=>{
        for (let snakePoint of snakeArr) {
            if (props.val === snakeHead) {
                setIsSnakeHead(true);
            }
            if (props.val === snakePoint) {
                setIsSnake(true)
                setIsSnakeHead(false);
                break;
            } else {
                setIsSnake(false)
                setIsSnakeHead(false)
            }
        }
    },[snakeArr, snakeHead])

    const gridColor = isSnakeHead ? "bg-black" : isSnake ? "bg-blue-400" : (GridNo%2) == 1 ? "bg-green-600" : "bg-green-400";


  return (
    <div className={`h-[40px] w-[40px] ${gridColor}`}>
        {props.val.toString()}
    </div>
  )
}

export default GridBox