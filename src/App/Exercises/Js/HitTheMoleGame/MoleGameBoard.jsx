import React from 'react';
import Mole from './mole.svg';
import './style.css';

const MoleGameBoard = ({
  moleArray,
  hitTheMole,

}) => {
  return (
    <>
      

      <div className="moleGame">
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
    </>
  );
};

export default MoleGameBoard;
