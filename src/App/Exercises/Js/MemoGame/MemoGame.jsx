import React, { useState, useEffect } from 'react';
import './style.css';
import MemoGameSettings from './MemoGameSettings';
import MemoBoard from './MemoBoard';
const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
const getRandomLetters = (amount) => {
  const shuffled = [...alphabet].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, amount / 2);
};
function createStageElement(character, index) {
  return { character, id: index, isGuessed: false, isVisible: false };
}

export function MemoGame() {
  const [stage, setStage] = useState([]);
  const [firstClickedCard, setFirstClickedCard] = useState(null);
  const [secondClickedCard, setSecondClickedCard] = useState(null);
  const [clicks, setClicks] = useState(0);
  const [time, setTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [boardSizeOptions, setBoardSizeOptions] = useState([
    { label: '8 elementów', boardSizeValue: 8, checked: true },
    { label: '16 elementów', boardSizeValue: 16, checked: false },
    { label: '20 elementów', boardSizeValue: 20, checked: false },
  ]);
  const DEBUG_showAll = false;
  const [gameArray, setGameArray] = useState(
    Array(
      boardSizeOptions.find((option) => option.checked).boardSizeValue
    ).fill('A')
  );

  function startMemoGame() {
    const getRandomLettersList = getRandomLetters(
      boardSizeOptions.find((option) => option.checked).boardSizeValue
    );

    const stage = [...getRandomLettersList, ...getRandomLettersList]
      .map((letter, index) => createStageElement(letter, index))
      .sort(() => 0.5 - Math.random());

    setStage(stage);
  }

  useEffect(() => {
    let interval;
    if (!interval && gameStarted) {
      interval = setInterval(() => {
        setTime((prevCountdown) => prevCountdown + 1);
      }, 1000);
    }
    if (time === 60) {
      clearInterval(interval);
      setGameStarted(false);
    }
    return () => {
      clearInterval(interval);
    };
  }, [gameStarted, time]);

  useEffect(() => {
    const first = stage.find((card) => card.id === firstClickedCard);
    const second = stage.find((card) => card.id === secondClickedCard);
    const equal = first?.character === second?.character;
    let timeout;

    setStage((prevArray) =>
      prevArray.map((card) => {
        const cardCopy = { ...card };
        if (cardCopy.id === first?.id || cardCopy.id === second?.id) {
          cardCopy.isVisible = true;
          cardCopy.isGuessed = cardCopy.isGuessed || equal;
        } else {
          cardCopy.isVisible = false;
        }
        return cardCopy;
      })
    );

    if (
      typeof firstClickedCard === 'number' &&
      typeof secondClickedCard === 'number'
    ) {
      timeout = setTimeout(() => {
        setStage((prev) =>
          prev.map((card) => {
            const copy = { ...card };
            copy.isVisible = false;
            return copy;
          })
        );
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [firstClickedCard, secondClickedCard]);

  function handleCellClick(card) {
    if (card.id === firstClickedCard || card.isGuessed) return;
    if (typeof firstClickedCard !== 'number') {
      setFirstClickedCard(card.id);
      return;
    }
    if (typeof secondClickedCard !== 'number') {
      setClicks((prevValue) => prevValue + 1);
      setSecondClickedCard(card.id);
      return;
    }
    setSecondClickedCard(null);
    setFirstClickedCard(card.id);
  }

  function renderElement(cardObject) {
    return (
      <div
        key={cardObject.id}
        className={classOfElement(cardObject)}
        onClick={() => handleCellClick(cardObject)}
      >
        {/* {cardObject.character} */}
        {(cardObject.isGuessed || cardObject.isVisible || DEBUG_showAll) &&
          cardObject.character}
      </div>
    );
  }
  function classOfElement(el) {
    const classes = ['cell'];

    if (el.isGuessed) {
      classes.push('guessed');
    }

    if (!el.isVisible && !el.isGuessed && !DEBUG_showAll) {
      classes.push('closed');
    }

    return classes.join(' ');
  }
  return (
    <>
      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>
      {/* {!gameStarted ? ( */}
      <MemoGameSettings
        startStopGame={() => {
          setGameStarted((prev) => !prev);

          setTime(0);
          setClicks(0);
          startMemoGame();
        }}
        gameStarted={gameStarted}
        gameArray={gameArray}
        setGameArray={setGameArray}
        boardSizeOptions={boardSizeOptions}
        setBoardSizeOptions={setBoardSizeOptions}
        stage={stage}
      />
      {/* ) : null} */}
      {/* { gameStarted? (<>  */}
      <Timer time={time} />
      <MoveCounter clicks={clicks} />

      <MemoBoard
        gameArray={gameArray}
        handleCellClick={handleCellClick}
        renderElement={renderElement}
        gameStarted={gameStarted}
        stage={stage}
      />
      {/* </>) */}
      {/* // : null  } */}
    </>
  );
}
const Timer = ({ time }) => {
  const formattedTime = new Date(time * 1000).toISOString().slice(14, 19);
  return <h4>CZAS GRY: {formattedTime}</h4>;
};

const MoveCounter = ({ clicks }) => {
  return <h4>LICZBA RUCHÓW: {clicks}</h4>;
};
