import React from 'react';
import './style.css';

const MemoBoard = ({
  gameArray,
  handleCellClick,
  stage,
  renderElement,
  gameStarted,
}) => {
  return (
    // <div className="board" >
    //   {gameArray.map(() => {
    //     return <div className="square" onClick={handleCellClick}>{stage}</div>;
    //   })}
    // </div>

    <div className="board" >
      {gameStarted && stage.map(renderElement)}
    </div>
  );
};

export default MemoBoard;
