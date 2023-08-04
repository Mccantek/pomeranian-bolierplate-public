import { useState, useEffect } from 'react';
import React from 'react';

import './styles.css';

const Time2 = () => {
  const [position, setPosition] = useState(500);
  const [isMoving, setIsMoving] = useState(true);
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    let intervalId;
    if (isMoving) {
      intervalId = setInterval(() => {
        setPosition((prevPosition) => prevPosition - 1);
      }, 10);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isMoving]);

  useEffect(() => {
    let countdownIntervalId;
    if (countdown > 0) {
      countdownIntervalId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } 
    return () => {
      clearInterval(countdownIntervalId);
    };
  }, [countdown]);

  const handleStart = () => {
    setIsMoving(true);
  };

  const handleStop = () => {
    setIsMoving(false);
  };

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          left: `${position}px`,
          top: '50%',
          transform: 'translateY(-50%)',
          width: '200px',
          height: '100px',
          backgroundColor: 'blue',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        jestem latającym banerem
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
      <div style={{ marginTop: '20px' }}> Countdown {countdown} </div>
    </div>
  );
};

export default Time2;
