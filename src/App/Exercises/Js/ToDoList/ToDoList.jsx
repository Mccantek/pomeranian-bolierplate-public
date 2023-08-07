import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './style.css';
import { formatDate } from '../../../../helpers/formatDate';
const BASE_API_URL = 'http://localhost:3333/api';
export function ToDoList() {
  const [getToDoList, setToDoList] = useState([]);
  const [getError, setError] = useState(null);
  const [getCounter, setCounter] = useState(0);
  const handleFetchTodoData = async () => {
    const timoutDuration = 5000; // 5 sekund oczekiwania na odpowiedz serwera
    try {
      const fetchDataPromise = axios.get(`${BASE_API_URL}/todo`);
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
  }, []);

  return (
    <div className="todo-container">
      <h2 className="todo-container__title">ToDo List</h2>
      {getError && <p>{getError}</p>}
      <div className="todo-container__list">
        {getToDoList.length > 0 &&
          getToDoList.map((todo) => {
            const itemClasses = `todo-container-list__item ${
              todo.isDone ? 'todo-container-list__item--darker' : ''
            }`;

            return (
              <div className={itemClasses} key={todo.id}>
                <div className="todo-container-list__item__wrapper">
                  <h3 className="todo-container-list__item__wrapper__title">
                    {todo.title}
                  </h3>
                  <div className="todo-container-list__item__wrapper__text--smaller todo-container-list__item__wrapper__text">
                    {todo.author}
                  </div>
                  <div className="todo-container-list__item__wrapper__text--smaller todo-container-list__item__wrapper__text">
                    {formatDate(todo.createdAt)}
                  </div>
                  <p className="todo-container-list__item__wrapper__text">
                    {todo.note}
                  </p>
                </div>
                <div className="todo-container-list__item__side">
                  {todo.isDone && (
                    <>
                      <div className="todo-container-list__item__side__checkmark">
                        &#10003;
                      </div>
                      <div>{formatDate(todo.doneDate)}</div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
