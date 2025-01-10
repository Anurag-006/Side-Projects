import { useState } from 'react';
import SnakeContext from './snakeContext';

const SnakeContextProvider = ({ children }: any) => {
  const [snakeArr, setSnakeArr] = useState<number[]>([124, 123, 122, 121]); 
  const [axis, setAxis] = useState("R");
  const [oldAxis, setOldAxis] = useState("R");
  const [snakeHead, setSnakeHead] = useState(snakeArr[0])

  return (
    <SnakeContext.Provider value={{ snakeArr, setSnakeArr, axis, oldAxis, setAxis, setOldAxis, snakeHead, setSnakeHead }}>
      {children}
    </SnakeContext.Provider>
  );
};

export default SnakeContextProvider;
