import React, { useEffect } from 'react';
import { useState } from 'react';
import './style.css';
import axios from 'axios';

const BASE_API_URL = 'http://localhost:3333/';
export function SwaggerExercise() {
  const [getToDoList, setToDoList] = useState([]);
  const [getError, setError] = useState(null);
  const [getCounter, setCounter] = useState(0);
  const [getNewToDo, setNewToDo] = useState('');

  const handleFetchTodoData = async () => {
    const timoutDuration = 5000; // 5 sekund oczekiwania na odpowiedz serwera
    try {
      const fetchDataPromise = axios.get(`${BASE_API_URL}api/todo`);
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Response Timeout')), timoutDuration);
      });

      const response = await Promise.race([fetchDataPromise, timeoutPromise]);
      if (!response) {
        setError('Przekroczono czas oczekiwania na odpowiedź serwera');
      }
      if (response) {
        setToDoList(response.data);
        setError('');
      }
    } catch (error) {
      setToDoList([]);
      setError('Wystąpił błąd podczas komunikacji z serwerem' + error?.message);
    }
  };

  useEffect(() => {
    handleFetchTodoData();
  }, [getCounter]);

  return (
    <div className="container--swagger">
      {/* <button onClick={handleFetchTodoData}>Pobierz Todos</button> */}
      <button onClick={() => setCounter(getCounter + 1)}>Pobierz Todos</button>
      {getError && <p>{getError}</p>}
      {getToDoList.length > 0 && (
        <ul>
          {getToDoList.map((todo) => (
            <li key={todo?.id}>{todo.note}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
