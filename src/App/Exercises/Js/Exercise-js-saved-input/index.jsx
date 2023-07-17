import React, { useState } from 'react';
import './styles.css';

const LocalStorageSavedInput = () => {
  const UNIQUE_LOCALSTORAGE_KEY = 'savedInputKey';

  const [getLocalStorageDate, setLocalStorageData] = useState('');

  const handleSave = () => {
    localStorage.setItem(UNIQUE_LOCALSTORAGE_KEY, getLocalStorageDate);
    return console.log('Zapisano dane w local storage', getLocalStorageDate);
  };

  const handleRead = () => {
    const getLocalStorageNameData = localStorage.getItem(
      UNIQUE_LOCALSTORAGE_KEY
    );
    return console.log(
      'Odczytano dane w local storage',
      getLocalStorageNameData
    );
  };

  const handleClear = () => {
    const storedData = localStorage.removeItem(UNIQUE_LOCALSTORAGE_KEY);
    return console.log('Usunięto dane z local storage', storedData);
  };

  return (
    <div className="container-local-storage">
      <input
        type="text"
        value={getLocalStorageDate}
        
        onChange={(event) => setLocalStorageData(event.target.value)}
      />

      <button onClick={handleSave}>Zapisz</button>
      <button onClick={handleRead}>Odczytaj</button>
      <button onClick={handleClear}>Wyczyść</button>
    </div>
  );
};

export default LocalStorageSavedInput;
