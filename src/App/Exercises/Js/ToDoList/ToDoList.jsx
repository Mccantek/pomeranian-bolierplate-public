import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './style.css';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoForm } from './TodoForm/TodoForm';
import RefreshButton from '../../../Components/RefreshButton/RefreshButton';

export const BASE_API_URL = 'http://localhost:3333/api';
export function ToDoList() {
  const [todoList, setToDoList] = useState([]);
  const [error, setError] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);

  const [idForEdit, setIdForEdit] = useState(null);
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
      {error && (
        <>
          <p>
            {error} <br />{' '}
          </p>{' '}
          <RefreshButton />
        </>
      )}

      {isFormVisible && (
        <TodoForm
          setFormVisible={setFormVisible}
          handleFetchTodoData={handleFetchTodoData}
          setIdForEdit={setIdForEdit}
          data={todoList.find((todo) => todo.id === idForEdit)}
        />
      )}
      {!isFormVisible && (
        <>
          <div className="todo-container__list">
            {todoList.length > 0 &&
              todoList.map((todo) => {
                return (
                  <TodoItem
                    todo={todo}
                    key={todo.id}
                    getTodoList={handleFetchTodoData}
                    setIdForEdit={setIdForEdit}
                    setFormVisible={setFormVisible}
                  />
                );
              })}
          </div>
          <button
            className="big-button"
            onClick={() => {
              setFormVisible(true);
            }}
          >
            DODAJ
          </button>
        </>
      )}
    </div>
  );
}
