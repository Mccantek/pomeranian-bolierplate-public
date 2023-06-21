import { useState } from 'react';
import './styles.css';

export const Excerise = () => {
  const [foster_pets, setFoster_pets] = useState([
    {
      name: 'Burek',
      id: 0,
      age: 4,

      sex: 'pies',

      breed: 'mieszaniec',

      size: 'średni',

      chip: false,

      sterilized: true,
    },

    {
      name: 'Łatka',
      id: 1,
      age: 7,

      sex: 'suczka',

      breed: 'owczarek niemiecki',

      size: 'duży',

      chip: true,

      sterilized: true,
    },

    {
      name: 'Reksio',
      id: 2,
      age: 12,

      sex: 'pies',

      breed: 'beagle',

      size: 'duży',

      chip: true,

      sterilized: true,
    },

    {
      name: 'Lessie',
      id: 3,
      age: 1,

      sex: 'suczka',

      breed: 'chihuahua',

      size: 'mały',

      chip: false,

      sterilized: true,
    },
  ]);
  const addRandomDog = () => {
    setFoster_pets((available_before) => [
      ...available_before,

      {
        id: 16,

        name: newName,

        age: 0,

        sex: '-',

        breed: '-',

        size: '-',

        chip: false,

        sterilized: false,
      },
    ]);
  };
  const [newName, setNewName] = useState('');
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <button onClick={addRandomDog}>dodaj psa</button>

      <table className='dog-table' border={1} style={{ width: '100%' }}>
        <thead>
          <tr>
            {Object.keys(foster_pets[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {foster_pets.map((dog) => {
            return (
              <tr key={dog.id}>
                <td> {dog.id}</td>
                <td> {dog.name}</td>
                <td> {dog.age}</td>
                <td> {dog.sex}</td>
                <td> {dog.breed}</td>
                <td> {dog.size}</td>
                <td>
                  <input type="checkbox" checked={dog.chip} />
                </td>
                <td>
                  <input type="checkbox" checked={dog.sterilized} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
