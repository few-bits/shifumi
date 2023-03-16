import React, { useState, useEffect } from 'react';

import { MODE_AWAITING, MODE_RESULTS, BASE_LEVEL } from '../../constants';
import { isTheLastMove, isPlayerMoved, getRandomValue, findWinner } from '../../utils';
import Choose from '../Choose';
import styles from './game.module.css'

function Game({ scrollTo }) {
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

  useEffect(() => {
    scrollTo(score >= 0 ? (BASE_LEVEL-score) : BASE_LEVEL)
  }, [score, scrollTo])

  return (
    <div className={styles.game}>
      <div className={styles.text}>Score:{score}/2</div>
      <div className={styles.text}>Mode:{mode}</div>
      <div className={styles.text}>Winner:{winner}</div>

      <Choose
        moveHandler={setPlayerMove}
        playerMove={playerMove}
        mode={mode}
      />
    </div>
  );
}

export default Game;
