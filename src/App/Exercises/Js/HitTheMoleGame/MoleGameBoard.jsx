import React from 'react';
import Mole from './mole.svg';
const MoleGameBoard = ({ scoreCount, moleArray, hitTheMole }) => {
  return (
    <div className="moleGame" >
      <h4>Current score = {scoreCount} </h4>
      <div style={{ display: 'flex', gap: '5px' }}>
        {moleArray.map((mole, index) => {
          return (
            <div
              style={{
                width: '104px',
                height: '104px',
                backgroundColor: '#EBEBEB',
                borderRadius: '8px',
                margin: '5px',
              }}
            >
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
