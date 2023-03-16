import React, { useState, useEffect } from 'react';

import { MODE_AWAITING, MODE_RESULTS, MODE_FINISHED, BASE_LEVEL, MAX_SCORE } from '../../constants';
import { isTheLastMove, isPlayerMoved, getRandomValue, findWinner } from '../../utils';
import Choose from '../Choose';
import { Text, StyledGame, PlayAgain } from './styled';

function Game({ scrollTo }) {
  const [mode, setMode] = useState(MODE_AWAITING);
  const [playerMove, setPlayerMove] = useState(null);
  const [computerMove, setcomputerMove] = useState(null);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (isTheLastMove(playerMove, computerMove)) {
      const newWinner = findWinner(playerMove, computerMove)
      setWinner(newWinner);
      let diff = newWinner === 'Player' ? 1 : -1;
      diff = newWinner === 'Tie' ? 0 : diff;
      setScore(prevScore => prevScore + diff);
      setMode(MODE_RESULTS);


      const resetTimeout = setTimeout(() => {
        setWinner(null);
        setMode(prev => prev !== MODE_FINISHED ? MODE_AWAITING : prev);
        setPlayerMove(null);
        setcomputerMove(null);
      }, 1000);

      return () => { clearTimeout(resetTimeout) }
    } else if (isPlayerMoved(playerMove, computerMove)) {
      setcomputerMove(getRandomValue());
    }
  }, [playerMove, computerMove])

  useEffect(() => {
    const nextLevel = score >= 0 ? (BASE_LEVEL-score) : BASE_LEVEL;
    scrollTo(nextLevel);
    if (score >= MAX_SCORE) {
      setMode(MODE_FINISHED);
    }
  }, [score, scrollTo])

  const playAgain = () => {
    setWinner(null);
    setMode(MODE_AWAITING);
    setPlayerMove(null);
    setcomputerMove(null);
    setScore(0);
  } 

  return (
    <StyledGame>
      <div>
        <Text>Score: {score}/{MAX_SCORE}</Text>
        <Text>Winner: { mode === MODE_AWAITING ? `${mode}...` : winner}</Text>
        {mode === MODE_FINISHED && (
          <Text>Game Over, You Win!</Text>
        )}
      </div>
      <Choose
        moveHandler={setPlayerMove}
        playerMove={playerMove}
        mode={mode}
      />
      {mode === MODE_FINISHED && (
        <PlayAgain onClick={playAgain}>Play again</PlayAgain>
      )}
    </StyledGame>
  );
}

export default Game;
