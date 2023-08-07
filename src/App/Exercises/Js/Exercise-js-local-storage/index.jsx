import React, { useState } from 'react';
import './styles.css';
const objectToEncode = {
  1: [],
  2: {},
  3: 1,
  4: Boolean(1),
  5: 'string',
};
const LocalStorageExercise = () => {
  const UNIQUE_LOCALSTORAGE_KEY = 'nameKey';
  const UNIQUE_OBJECT_DATA_LS_KEY = 'objectUniqueKey';

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

  const stringifyObject = () => {
    // it's encoding the data and making JSON object
    // we prepare data to send

    const objectToEncodeJSON = JSON.stringify(objectToEncode);
    return objectToEncodeJSON;
  };
  stringifyObject();

  const parseJSONObject = () => {
    const objectToDecode = JSON.parse(stringifyObject());
    return console.log(objectToDecode);
  };
  parseJSONObject();

  const parseJSONObjects = (jsonObject) => {
    const objectToDecode = JSON.parse(jsonObject);
    return objectToDecode;
  };
  parseJSONObject();

  // set object to local storage
  const setDataToLocalStorage = () => {
    const storedData = localStorage.setItem(
      UNIQUE_OBJECT_DATA_LS_KEY,
      stringifyObject()
    );
    return storedData;
  };

  setDataToLocalStorage();

  const getDataFromLocalStorage = () => {
    const dataFromLS = parseJSONObjects(
      localStorage.getItem(UNIQUE_OBJECT_DATA_LS_KEY)
    );
    console.log('encoded data with specific key = ', dataFromLS[2]);
    return console.log('decoded data from LS = ', dataFromLS);
  };
  getDataFromLocalStorage();
  //end  set object to local storage

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

export default LocalStorageExercise;
