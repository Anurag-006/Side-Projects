import SnakeGame from "./components/SnakeGame"

function App() {

  return (
    <div>
      <div className="flex m-5 flex-col items-center h-screen bg-[#1a1a1a]">
        <h1 className="bg-blue-300 text-center text-4xl p-4 m-10 mt-5">This is Snake Game</h1>
          <SnakeGame/>
      </div>
    </div>
  )
}

export default App
