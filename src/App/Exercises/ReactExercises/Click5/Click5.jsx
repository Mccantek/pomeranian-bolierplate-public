import { useState } from 'react';
import './styles.css';

export const Click5 = () => {
  const [click, setClick] = useState(0);
  const [message, setMessage] = useState('');
  function clickHandler() {
    let currentClick = click;
    setClick(currentClick + 1);
    console.log(click);

    if (currentClick + 1 >= 5) {
      setMessage ("Gratulacje");
    } else {
      setMessage(`Kliknąłeś ${currentClick + 1} razy`);
    }
  }

  return (
    <div className="Click05">
      <h1>Kliknij 5</h1>

      <button onClick={clickHandler}>{'Start'}</button>
      <p>{message}</p>
    </div>
  );
};
