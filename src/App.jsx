import { useState } from "react"
import StartGame from "./assets/components/StartGame"
import GamePlay from "./assets/components/GamePlay";

function App() {

  const[isGameStarted,setGameStarted]=useState(false);
  const toggleGamePlay = () =>{
    setGameStarted((prev)=>!prev);
  }

  return (
    <>
      {
        isGameStarted ? <GamePlay /> : <StartGame 
        toggle={toggleGamePlay}
        />
      }
    </>
  )
}

export default App
