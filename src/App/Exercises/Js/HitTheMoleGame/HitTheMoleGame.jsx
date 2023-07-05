import React from 'react';

import './style.css';
import MoleIMG from './mole.svg';
import { useState } from 'react';

export function HitTheMoleGame() {
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );

  const defaultGameTime = 2 * 60 * 1000;
  const [gameTime, setGameTime] = useState(defaultGameTime);
  const [moleCount, setMoleCount] = useState(1);

  const gameTimeOption = [
    { label: '1 minuta', timeValue: 1 * 60 * 1000 },
    { label: '2 minuty', timeValue: 2 * 60 * 1000 },
    { label: '3 minuty', timeValue: 3 * 60 * 1000 },
  ];

  const moleCountOption = [
    { label: '1 kret' },
    { label: '2 krety' },
    { label: '3 krety' },
  ];

  function hitTheMole(index) {
    console.log(moleArray[index].isWhacked);
    if (!moleArray[index].isVisible) return;
    moleArray[index].isWhacked = !moleArray[index].isWhacked;
    console.log(moleArray[index].isWhacked);
  }

  return (
    <>
      <div>
        <p>
          Czas gry: {gameTime / 1000 / 60}{' '}
          {gameTime > 1 * 60 * 1000 ? 'minuty' : 'minuta'}
        </p>
        {gameTimeOption.map(({ label, timeValue }) => (
          <button onClick={() => setGameTime(timeValue)}> {label}</button>
        ))}
        <p>Liczba kretów: {moleCount} </p>
        {moleCountOption.map(({ label }) => (
          <button onClick={() => setMoleCount(Number(label[0]))}>
            {' '}
            {label}
          </button>
        ))}
        {moleArray.map((mole, index) => (
          <span>
            {mole.isVisible ? (
              <img src={MoleIMG} alt="" onClick={() => hitTheMole(index)} />
            ) : null}
          </span>
        ))}
      </div>
    </>
  );
}
