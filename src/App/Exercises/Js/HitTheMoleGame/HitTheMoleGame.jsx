import React from 'react';

import './style.css';
import MoleIMG from './mole.svg';
import { useState } from 'react';

export const MoleGameSetting = () => {
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
  return (
    <>
      {' '}
      <div className="moleGameOptions">
        <p>
          Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
          którym się pojawił.
        </p>

        <div className="gameOptionsButtons">
          <div className="gameButtonsRows">
            <div>
              <h4>CZAS GRY :  {gameTime}</h4>
              {gameTimeOption.map(({ label, timeValue }) => (
                <button onClick={() => setGameTime(timeValue)}>{label}</button>
              ))}
            </div>
            <div>
              <h4>LICZBA KRETÓW</h4>
              {moleCountOption.map(({ label }) => (
                <button onClick={() => setMoleCount(Number(label[0]))}>
                  {label}
                </button>
              ))}
            </div>
            <div>
              <h4>PRZYCISKI STERUJĄCE</h4>
              <button>START</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const MoleGameBoard = (props) => {
  return props.moleArray.map((mole, index) => (
    <span>
      {mole.isVisible ? (
        <img src={MoleIMG} alt="" onClick={() => props.hitTheMole(index)} />
      ) : null}
    </span>
  ));
};

export function HitTheMoleGame() {
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );
  function hitTheMole(index) {
    if (!moleArray[index].isVisible) return;
    moleArray[index].isWhacked = !moleArray[index].isWhacked;
  }
  return (
    <>
      <MoleGameSetting />
      <MoleGameBoard moleArray={moleArray} hitTheMole={hitTheMole} />

     
    </>
  );
}
