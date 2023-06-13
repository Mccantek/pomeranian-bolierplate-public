import { useState } from 'react';
import './styles.css';

export const MoreOrLess = () => {
  const [message, setMessage] = useState('');
  function answerHandler(ev) {
    let currentAnswer = ev.target.value;

    if (currentAnswer > 10) {
      console.log('Tak');
      setMessage('Tak');
    } else {
      console.log('nie');
      setMessage('Nie');
    }
  }

  return (
    <div>
      <h1>Czy A jest większe od 10?</h1>
      <input type="number" placeholder="A" onChange={answerHandler} />
      <p>
        {'Odpowiedź:'} {message}
      </p>
      
    </div>
  );
};
