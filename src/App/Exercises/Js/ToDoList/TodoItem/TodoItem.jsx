import axios from 'axios';
import { formatDate } from '../../../../../helpers/formatDate';
import { BinIcon } from '../Icons/BinIcon';
import { EditIcon } from '../Icons/EditIcon';
import { BASE_API_URL } from '../ToDoList';
import './TodoItem.css';
import { useState } from 'react';
import { CheckIcon } from '../Icons/CheckIcon';

export function TodoItem({
  todo,
  getTodoList,
  setIdForEdit,
  setFormVisible,
  updatedTodoList,
}) {
  //   const todo = props.todo;
  const { title, author, createdAt, isDone, doneDate, note, id } = todo;
  const [removeError, setRemoveError] = useState(false);
  const itemClasses = `todo-item ${isDone ? 'todo-item--darker' : ''}`;

  function handleRemoveClick() {
    axios
      .delete(BASE_API_URL + '/todo/' + id)
      .then(() => {
        getTodoList();
      })
      .catch(() => {
        setRemoveError(true);
      });
  }

  function handleMarkAsDoneClick() {
    axios
      .put(BASE_API_URL + '/todo/' + id + '/markAsDone')
      .then((response) => {
        updatedTodoList(response.data);
      })
      .catch(() => {});
  }

  return (
    <div className={itemClasses} key={id}>
      <div className="todo-item__wrapper">
        <h3 className="todo-item__wrapper__title">{title}</h3>
        <div className="todo-item__wrapper__text--smaller todo-item__wrapper__text">
          {author}
        </div>
        <div className="todo-item__wrapper__text--smaller todo-item__wrapper__text">
          {formatDate(createdAt)}
        </div>
        <p className="todo-item__wrapper__text">{note}</p>
      </div>
      <div className="todo-item__actions">
        <button
          className="todo-item__actions__button todo-item__actions__icon"
          onClick={() => {
            handleMarkAsDoneClick();
          }}
        >
          <CheckIcon isError={removeError} />
        </button>

        <button
          className="todo-item__actions__button todo-item__actions__icon"
          onClick={() => {
            setIdForEdit(id);
            setFormVisible(true);
          }}
        >
          <EditIcon isError={removeError} />
        </button>
        <button
          className="todo-item__actions__button todo-item__actions__icon"
          onClick={() => handleRemoveClick()}
        >
          <BinIcon isError={removeError} />
        </button>
        {removeError && (
          <div className="todo-item__actions__error-message">
            nie udało się usunąć
          </div>
        )}
        {isDone && (
          <>
            <div className="todo-item__actions__icon todo-item__actions__icon--checkmark">
              &#10003;
            </div>
            <div>{formatDate(doneDate)}</div>
          </>
        )}
      </div>
    </div>
  );
}
