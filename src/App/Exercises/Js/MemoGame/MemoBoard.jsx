import React from 'react';
import './style.css';

const MemoBoard = ({ startStopGame, stage, renderElement, gameStarted }) => {
  const Timer = ({ time }) => {
    const formattedTime = new Date(time * 1000).toISOString().slice(14, 19);
    return <h4>CZAS GRY: {formattedTime}</h4>;
  };

  const MoveCounter = ({ clicks }) => {
    return <h4>LICZBA RUCHÓW: {clicks}</h4>;
  };

  return (
    <>
      <div className="gameButtonsRows">
        <h4>PRZYCISKI STERUJĄCE</h4>

        <button onClick={startStopGame}>
          {' '}
          {gameStarted ? 'PASS' : 'START'}
        </button>
      </div>
      <div className="board">{gameStarted && stage.map(renderElement)}</div>
    </>
  );
};

export default MemoBoard;
