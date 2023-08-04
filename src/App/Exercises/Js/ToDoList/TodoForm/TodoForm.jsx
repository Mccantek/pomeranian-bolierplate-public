import { useState } from 'react';
import './TodoForm.css';
import axios from 'axios';
import { BASE_API_URL } from '../ToDoList';
import { SuccessPopup } from './Popup';

export function TodoForm({
  setFormVisible,
  handleFetchTodoData,
  data,
  setIdForEdit,
}) {
  const isEditMode = Boolean(data);
  const [title, setTitle] = useState(isEditMode ? data.title : '');
  const [author, setAuthor] = useState(isEditMode ? data.author : '');
  const [note, setNote] = useState(isEditMode ? data.note : '');
  const [isError, setError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  async function handleCreateTodo() {
    setInProgress(true);
    try {
      await axios.post(BASE_API_URL + '/todo', {
        title, // można również: title: title
        note,
        author,
      });
      setIsSuccess(true);
      setTimeout(() => {
        /**aktualizuj pola po 2s  */
        setTitle('');
        setAuthor('');
        setNote('');
      }, 2000);
    } catch (error) {
      setError(true);
    } finally {
      setInProgress(false);
    }
  }

  async function handleEditTodo() {
    setInProgress(true);
    try {
      await axios.put(BASE_API_URL + '/todo/' + data.id, {
        title, // można również: title: title
        note,
        author,
      });
      setIsSuccess(true);
    } catch (error) {
      setError(true);
    } finally {
      setInProgress(false);
    }
  }

  const isTitleToLong = title.length > 15;
  const isAuthorTooLong = author.length > 15;
  const isNoteTooLong = note.length > 100;
  const isFormValid = !isTitleToLong && !isAuthorTooLong && !isNoteTooLong;
  const isFormFilled = title.length > 0 && note.length > 0 && author.length > 0;
  const isReadyToSend = isFormFilled && isFormValid;

  return (
    <>
      <div className="todo-form">
        {isEditMode ? <h3>Edycja zadania</h3> : <h3>Dodawanie zadania</h3>}
        <div className="todo-form__field">
          <label className="todo-form__field__label">tytuł</label>
          <input
            type="text"
            placeholder="kup ser"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        {isTitleToLong && (
          <p className="todo-form-error-message-small">
            {' '}
            Podany tekst przekracza 15 znaków
          </p>
        )}
        {!isEditMode && (
          <>
            <div className="todo-form__field">
              <label className="todo-form__field__label">autor</label>
              <input
                type="text"
                placeholder="Jan Kowalski"
                value={author}
                onChange={(event) => {
                  setAuthor(event.target.value);
                }}
              />
            </div>
            {isAuthorTooLong && (
              <p className="todo-form-error-message-small">
                {' '}
                Podany tekst przekracza 15 znaków
              </p>
            )}
          </>
        )}
        <div className="todo-form__field">
          <label className="todo-form__field__label">treść</label>
          <textarea
            placeholder="kup ser czy co tam chcesz"
            rows={5}
            cols={25}
            value={note}
            onChange={(event) => {
              setNote(event.target.value);
            }}
          />
        </div>
        {isNoteTooLong && (
          <p className="todo-form-error-message-small">
            {' '}
            Podany tekst przekracza 100 znaków
          </p>
        )}
        {inProgress && (
          <p className="todo-form__info-message"> Trwa zapisywanie</p>
        )}
        {isSuccess && (
          <SuccessPopup title={title} onClose={() => setIsSuccess(false)} />
        )}
        {isError && (
          <p className="todo-form__error-message">
            {' '}
            Wystąpił błąd, spróbuj ponownie{' '}
          </p>
        )}
        <div className="todo-form__buttons">
          <button
            className="big-button"
            onClick={() => {
              setFormVisible(false);
              handleFetchTodoData();
              setIdForEdit(null);
          
            }}
          >
            Cofnij
          </button>
          <button
            className="big-button"
            onClick={() => {
              if (isEditMode) {
                handleEditTodo();
              } else {
                handleCreateTodo();
              }
            }}
            disabled={!isReadyToSend}
          >
            {isEditMode ? 'Zapisz' : 'Dodaj'}
          </button>
        </div>{' '}
      </div>
    </>
  );
}
