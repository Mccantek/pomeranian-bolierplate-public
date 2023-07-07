import React from 'react';
import Mole from './mole.svg';
import './style.css';

const MoleGameBoard = ({
  scoreCount,
  moleArray,
  hitTheMole,
  countdown,
  startStopGame,
  gameStarted,
}) => {
  const formattedTime = new Date(countdown * 1000).toISOString().slice(14, 19);

  return (
    <div className="moleGame">
      <div className="info-container">
        <div>
          <h4>czas do końca</h4>
          <button> {formattedTime} </button>
        </div>
        <div>
          <h4>WYNIK</h4>
          <button> {scoreCount}</button>{' '}
        </div>
        <div>
          <h4>PRZYCISKI STERUJĄCE</h4>

          <button onClick={startStopGame}>
            {' '}
            {gameStarted ? 'STOP' : 'START'}
          </button>
        </div>
      </div>
      <div className="board">
        {moleArray.map((mole, index) => {
          return (
            <div className="square" style={{}}>
              <span>
                {mole.isVisible ? (
                  <img src={Mole} onClick={() => hitTheMole(index)} />
                ) : null}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoleGameBoard;
