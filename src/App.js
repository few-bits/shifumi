import React, { useState, useEffect } from 'react';
import { MODE_AWAITING, MODE_RESULTS } from './constants.js';
import { isTheLastMove, isPlayerMoved, getRandomValue, findWinner } from './utils.js';
import Player from './Player.jsx';
import './App.css';

function App() {
  const [mode, setMode] = useState(MODE_AWAITING);
  const [playerMove, setPlayerMove] = useState(null);
  const [computerMove, setcomputerMove] = useState(null);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (isTheLastMove(playerMove, computerMove)) {
      setMode(MODE_RESULTS);
      const newWinner = findWinner(playerMove, computerMove)
      setWinner(newWinner)
      let diff = newWinner === 'Player' ? 1 : -1;
      diff = newWinner === 'Tie' ? 0 : diff;
      setScore(prevScore => prevScore + diff);


      const resetTimeout = setTimeout(() => {
        setWinner(null);
        setMode(MODE_AWAITING);
        setPlayerMove(null);
        setcomputerMove(null);
      }, 4000);

      return () => { clearTimeout(resetTimeout) }
    } else if (isPlayerMoved(playerMove, computerMove)) {
      setcomputerMove(getRandomValue());
    }
  }, [playerMove, computerMove])

  return (
    <div className="App">
      <div>score:{score}</div>
      <div>mode:{mode}</div>
      <div>winner:{winner}</div>

      <Player
        moveHandler={setPlayerMove}
        playerMove={playerMove}
      />
    </div>
  );
}

export default App;
