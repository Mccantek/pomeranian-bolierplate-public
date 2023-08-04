import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './style.css';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoForm } from './TodoForm/TodoForm';
import RefreshButton from '../../../Components/RefreshButton/RefreshButton';

export const BASE_API_URL = 'http://localhost:3333/api';
const timoutDuration = 5000; // 5 sekund oczekiwania na odpowiedz serwera
export function ToDoList() {
  const [todoList, setToDoList] = useState([]);
  const [error, setError] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [idForEdit, setIdForEdit] = useState(null);

  function updatedTodoList(response) {
    setToDoList(
      todoList.map((todo) => {
        if (todo.id === response.data.id) {
          return response.data;
        }
        return todo;
      })
    );
  }

  const handleFetchTodoData = async (givenId) => {
    const isGetSpecificTodoMode = Boolean(givenId);

    const urlSuffix = isGetSpecificTodoMode ? `/${givenId}` : '';
    try {
      const fetchDataPromise = axios.get(`${BASE_API_URL}/todo${urlSuffix}`);
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

        if (isGetSpecificTodoMode) {
        updatedTodoList(response.data)
        } else {
          setToDoList(response.data);
        }
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
                    updatedTodoList={updatedTodoList}
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
