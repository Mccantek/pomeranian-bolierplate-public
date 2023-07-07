import React, { useState, useEffect } from 'react';

import './style.css';
import MoleGameSettings from './Settings';
import MoleGameBoard from './MoleGameBoard';

const CountdownTimer = ({ countdown }) => {
  return (
    <div>
      <p>time remaining: {countdown} seconds</p>
    </div>
  );
};
export function HitTheMoleGame() {
  const defaultGameTime = 2 * 60 * 1000;
  const moleSpeed = 1000;
  const [gameTime, setGameTime] = useState(defaultGameTime);
  const [seconds, setSeconds] = useState(gameTime / 1000);

  const [moleCount, setMoleCount] = useState(1);
  const [scoreCount, setScoreCount] = useState(0);
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );
  const [countdown, setCountdown] = useState(seconds);
  const [gameStarted, setGameStarted] = useState(false);
  useEffect(() => {
    setSeconds(gameTime / 1000);
  }, [gameTime]);

  useEffect(() => {
    setCountdown(seconds);
    if (gameStarted) {
      let interval;
      if (!interval) {
        interval = setInterval(() => {
          setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
      }
      return () => {
        clearInterval(interval);
      };
    }
  }, [seconds, gameStarted]);

  useEffect(() => {
    let intervalId;
    if (!intervalId) {
      intervalId = setInterval(() => {
        showRandomMole();
      }, moleSpeed);
      return () => clearInterval(intervalId);
    }
  });

  function hitTheMole(index) {
    if (!moleArray[index].isVisible) return;
    moleArray[index].isWhacked = !moleArray[index].isWhacked;
    if (moleArray[index].isVisible) {
      setScoreCount(scoreCount + 1);
      setMoleArray((prevValue) => {
        const newArray = [...prevValue];
        newArray[index].isVisible = false;
        return newArray;
      });
    }
  }

  function showRandomMole() {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const random = getRandomIntInclusive(0, moleArray.length - 1);

    setMoleArray((previousMoleArray) =>
      previousMoleArray.map((mole, index) => {
        const updatedMole = { ...mole };
        updatedMole.isVisible = index === random;

        return updatedMole;
      })
    );
  }
  return (
    <>
      <MoleGameSettings
        gameTime={gameTime}
        moleCount={moleCount}
        setGameTime={setGameTime}
        setMoleCount={setMoleCount}
        startStopGame={() => setGameStarted((prev) => !prev)}
        gameStarted={gameStarted}
      />

      {gameTime !== seconds && seconds !== 0 ? (
        <MoleGameBoard
          scoreCount={scoreCount}
          moleArray={moleArray}
          hitTheMole={hitTheMole}
          countdown = {countdown}
          startStopGame={() => setGameStarted((prev) => !prev)}
          gameStarted={gameStarted}
        />
      ) : null}

      <CountdownTimer countdown={countdown} />
    </>
  );
}
// wynik 20 - koniec
// timer 0 - koniec

// if countdown !== 0 && gamestarted ? board : null