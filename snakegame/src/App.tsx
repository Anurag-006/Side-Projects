import SnakeGame from "./components/SnakeGame"
import { useContext } from "react"
import SnakeContext from "./context/snakeContext"


function App() {
  const {isGameOver, score} = useContext(SnakeContext);
  return (
    <div>
      <div className="flex m-5 flex-col items-center h-screen bg-[#1a1a1a]">
        <h1 className="bg-blue-300 text-center text-4xl p-4 m-10 mt-5">This is Snake Game</h1>
        {
          isGameOver ? <h1 className="text-3xl text-red-600 bg-yellow-500 p-4">Game Over and Score is: {score} </h1>
          :
          <SnakeGame/>
        }
      </div>
    </div>
  )
}

export default App
