import { useState } from 'react';
import './styles.css';

export const WhichBigger2 = () => {
  const [Xvalue, setXvalue] = useState(0);
  const [Yvalue, setYvalue] = useState(0);
  const [Answer, setAnswer] = useState('No nie wiem, wprowadź dane');

  function XHolder(event) {
    let tempXvalue = event.target.value;
    setXvalue(tempXvalue);
    Comparison(tempXvalue, Yvalue);
  }

  function YHolder(event) {
    let tempYvalue = event.target.value;
    setYvalue(tempYvalue);
    Comparison(Xvalue, tempYvalue);
  }

  function Comparison(a, b) {
    if (a > b) {
      setAnswer(`Owszem, ${a} jest większe od ${b}`);
    } else if (a === b) {
      setAnswer(`nieee, są równe`);
    } else {
      setAnswer(`Nie, ${b} jest większe od ${a}`);
    }
  }

  return (
    <div>
      <h1>Czy X jest większe od Y?</h1>
      <input type="number" placeholder="X" onChange={XHolder} /> <br />
      <input type="number" placeholder="Y" onChange={YHolder} />
      <h2>
        {'Odpowiedź: '}
        {Answer}
      </h2>
    </div>
  );
};
