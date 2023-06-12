import React, { useState } from 'react';

import './style.css';

export function ReactRouterEvents() {
  const [getCount, setCount] = useState(0);

  function handleClick(event) {
    return console.log('Jestem klikniętym buttonem');
  }

  function handleOnChangeInput(event) {
    const inputValue = event.target.value;
    return console.log('Wprowadzona wartość: ', inputValue);
  }

  function handleIncrement() {
    setCount(getCount + 1);
  }

  function handleDecrement() {
    setCount(getCount - 1);
  }

  return (
    <>
      <div className="form--container">
        <h1>Cześć!</h1>
        <label for="textInput" className="label">
          Wpisz tekst
        </label>
        <input
          type="text"
          id="textInput"
          name="textInput"
          placeholder="tekst do wpisania"
          onChange={handleOnChangeInput}
        />
        <br />
        <input
          onClick={handleClick}
          type="button"
          value="KLIKNIJ"
          className="click"
        />
      </div>
      <br />
      <br />
      <div className="counter--container">
        <p>Licznik: {getCount}</p>
        <input
          onClick={handleIncrement}
          type="button"
          value={
            getCount === 0
              ? `Kliknięto we mnie ${getCount} razy`
              : `Super kliknięto we mnie wiele razy - ${getCount}`
          }
        />
        <input onClick={handleDecrement} type="button" value="Decrement" />
      </div>
    </>
  );
}
