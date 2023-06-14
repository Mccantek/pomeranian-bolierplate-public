import { useState } from 'react';
import './styles.css';

export const WhichBigger = () => {
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
   const [result, setResult] = useState("");

  function AnswerHandler1(ev) {
    let currentAnswerA = ev.target.value;
    console.log('A = '.concat(currentAnswerA));
    setA(currentAnswerA);
    compare(currentAnswerA, B);
  }

  function AnswerHandler2(ev) {
    let currentAnswerB = ev.target.value;
    console.log('A = '.concat(currentAnswerB));
    setB(currentAnswerB);
    compare(A, currentAnswerB);
  }

  function compare(A, B) {
    if (A > B) {
      console.log('A jest większe od B');
      setResult('A jest większe od B')
    } else if (A === B) {
      console.log('A jest równe B');
      setResult('A jest równe B')
    } else {
      console.log('A jest mniejsze od B');
      setResult('A jest mniejsze od B')
    }
  }

  return (
    <div>
      <h1>Czy A jest większe od B?</h1>
      <input type="number" placeholder="A" onChange={AnswerHandler1} />
      <br />
      <input type="number" placeholder="B" onChange={AnswerHandler2} />
      <p>{'Odpowiedź: '}</p>
      <h2>
        {'A: '} {A}
      </h2>
      <h2>
        {'B: '} {B}
      </h2>
      <h3>{result}</h3>
    </div>
  );
};
