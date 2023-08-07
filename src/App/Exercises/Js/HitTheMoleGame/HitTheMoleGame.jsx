import React, { useState, useEffect } from 'react';

import './style.css';
import MoleGameSettings from './Settings';
import MoleGameBoard from './MoleGameBoard';
import BoardInfo from './Board-info';

export function HitTheMoleGame() {
  const DEFAULT_GAME_TIME = 2 * 60 * 1000;
  const MOLE_SPEED = 1000;
  const [gameTime, setGameTime] = useState(DEFAULT_GAME_TIME);
  const [moleCount, setMoleCount] = useState(1);
  const [scoreCount, setScoreCount] = useState(null);
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );
  const [countdown, setCountdown] = useState(gameTime / 1000);
  const [gameStarted, setGameStarted] = useState(false);

  const spentTime = gameTime / 1000 - countdown;

  useEffect(() => {
    setCountdown(gameTime / 1000);
  }, [gameTime]);

  useEffect(() => {
    if (!countdown) return;
    let interval;
    if (!interval && gameStarted) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [gameStarted, countdown]);

  useEffect(() => {
    let intervalId;
    if (!intervalId && gameStarted) {
      intervalId = setInterval(() => {
        showRandomMole();
      }, MOLE_SPEED);
    }
    return () => clearInterval(intervalId);
  }, [gameStarted]);

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

  useEffect(() => {
    if (countdown === 0 || scoreCount === 20) {
      setGameStarted(false);
    }
  }, [countdown, scoreCount]);

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
      <p style={{ fontSize: '18px', font: 'Poppins' }}>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>

      {!gameStarted ? (
        <MoleGameSettings
          gameTime={gameTime}
          moleCount={moleCount}
          setGameTime={setGameTime}
          setMoleCount={setMoleCount}
          startStopGame={() => {
            setGameStarted((prev) => !prev);
            setScoreCount(0);
          }}
          gameStarted={gameStarted}
          scoreCount={scoreCount}
          spentTime={spentTime}
        />
      ) : null}

      {gameStarted ? (
        <>
          <BoardInfo
            scoreCount={scoreCount}
            gameStarted={gameStarted}
            startStopGame={() => setGameStarted((prev) => !prev)}
            countdown={countdown}
            gameTime={gameTime}
          />

          <MoleGameBoard moleArray={moleArray} hitTheMole={hitTheMole} />
        </>
      ) : null}
    </>
  );
}
