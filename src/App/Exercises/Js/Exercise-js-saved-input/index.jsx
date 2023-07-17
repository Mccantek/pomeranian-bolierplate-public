import React, { useState, useEffect } from 'react';
import './styles.css';

const LocalStorageSavedInput = () => {
  const UNIQUE_LOCALSTORAGE_KEY = 'list-nicki';

  const [getLocalStorageDate, setLocalStorageData] = useState('');
  const [nicknames, setNicknames] = useState([]);

  useEffect(() => {
    const storedNicknames = localStorage.getItem(UNIQUE_LOCALSTORAGE_KEY);
    if (storedNicknames) {
      setNicknames(JSON.parse(storedNicknames));
    }
  }, []);

  const handleSave = () => {
    if (getLocalStorageDate.trim() !== '') {
      const newNickname = {
        nick: getLocalStorageDate,
        id: nicknames.length + 1, //
      };

      const updatedNicknames = [...nicknames, newNickname];
      setNicknames(updatedNicknames);
      setLocalStorageData('');

      localStorage.setItem(
        UNIQUE_LOCALSTORAGE_KEY,
        JSON.stringify(updatedNicknames)
      );
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSave();
    }
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
    setNicknames([]);
    return console.log('Usunięto dane z local storage', storedData);
  };

  return (
    <div className="container-local-storage">
      <label htmlFor="nick">Nick: </label>
      <input
        type="text"
        id="nick"
        placeholder="insert your nick"
        value={getLocalStorageDate}
        onChange={(event) => setLocalStorageData(event.target.value)}
        onKeyPress={handleKeyPress}
      />

      <button onClick={handleSave}>Dodaj</button>
      {/* <button onClick={handleRead}>Odczytaj</button>
      <button onClick={handleClear}>Wyczyść</button> */}

      <ul>
        {nicknames.map((nickname) => (
          <li key={nickname.id}>
            ID: {nickname.id} Nick: {nickname.nick}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocalStorageSavedInput;

// tablica która będzie przechowywać nicki ma mieć strukturę: `[{nick: 'xxx', id: 1}, ...]`
// - dodajmy 1-3 fakowych rekordów i w ten sposób sprawdźmy czy poprawnie wyświetla się tablica
// **część B: dodawanie nicku i wyświetlanie listy**
// - oprogramujmy dodawanie nicku do listy obiektów
// - dodajmy nową zmienną `idCounter` przez `useState` która będzie się zwiększać za każdym razem gdy dodamy nowy nick do listy
// - używamy wartości `idCounter` w dodawaniu nicku do listy

// **część C: zapisywanie listy w localStorage**
// - w momencie dodawania do nowego nicku do listy:
//     - ta powinna zapisać się w localStorage pod kluczem `list-nicki` (jako tablica obiektów)
//     - idCounter powinien się zapisać pod kluczem `list-nicki-index` (jako int)
// - w momencie odświeżenia strony zarówno tablica jak i idCounter powinny się załadować z localStorage
// - przy zapisie i odczycie pamiętać o parsowaniu tablicy

// **część D: usuwanie nicków (opcjonalna)**
// - po kliknięciu na x nick powinien zostać usunięty z listy
// - po usunięciu
// - `idCounter` się NIE ZMIENIA

// **część E: (opcjonalna)**
// - walidacja: nie można dodać 2x tego samego nicku
