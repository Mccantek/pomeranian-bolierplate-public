import React from 'react';
import Mole from './mole.svg';
const MoleGameBoard = ({ scoreCount, moleArray, hitTheMole }) => {
  return (

    <div className="moleGame">
        <h4>Current score = {scoreCount} </h4>
      {moleArray.map((mole, index) => {
        <div>
          <span>
            {mole.isVisible ? (
              <img src={Mole} onClick={() => hitTheMole(index)} />
            ) : null}
          </span>
        </div>;
      })}
    </div>
  );
};

export default MoleGameBoard;
