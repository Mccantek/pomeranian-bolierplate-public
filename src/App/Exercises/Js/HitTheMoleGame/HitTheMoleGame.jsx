import React, { useState, useEffect } from 'react';

import './style.css';
import MoleGameSettings from './Settings';
import MoleGameBoard from './MoleGameBoard';

export function HitTheMoleGame() {
  const defaultGameTime = 2 * 60 * 1000;
  const [gameTime, setGameTime] = useState(defaultGameTime / 1000);
  const [seconds, setSeconds] = useState(gameTime / 1000);

  const [moleCount, setMoleCount] = useState(1);
  const [scoreCount, setScoreCount] = useState(0);

  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );
  // const [countdown, setCountdown] = useState(initialCountdownState);

  useEffect(() => {
    let intervalId;

    if (!intervalId) {
      intervalId = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }
    console.log(seconds.toString().padStart(2, 0));
    return () => clearInterval(intervalId);
  }, [seconds]);

  function hitTheMole(index) {
    console.log(moleArray[index].isWhacked);

    if (!moleArray[index].isVisible) return;

    moleArray[index].isWhacked = !moleArray[index].isWhacked;

    console.log(moleArray[index].isWhacked);
  }

  return (
    <>
      <MoleGameSettings
        gameTime={gameTime}
        moleCount={moleCount}
        setGameTime={setGameTime}
        setMoleCount={setMoleCount}
      />

      <MoleGameBoard
        scoreCount={scoreCount}
        moleArray={moleArray}
        hitTheMole={hitTheMole}
      />
    </>
  );
}
