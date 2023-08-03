import { useState } from 'react';
import './TodoForm.css';
import axios from 'axios';
import { BASE_API_URL } from '../ToDoList';

export function TodoForm({ setAddingMode }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [note, setNote] = useState('');
  const [isError, setError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleCreateTodo() {
    console.log(title, 'title');
    console.log(author, 'autor');
    console.log(note, 'note');

    try {
      await axios.post(BASE_API_URL + '/todo', {
        title, // można również: title: title
        note,
        author,
      });
      setTitle('');
      setAuthor('');
      setNote('');
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      setError(true);
    }
  }
  const isReadyToSend =
    title.length > 0 && note.length > 0 && author.length > 0;

  return (
    <>
      <div className="todo-form">
        <h3>Dodawanie zadania</h3>
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
        <div className="todo-form__field">
          <label className="todo-form__field__label">autor</label>
          <input
            type="text"
            placeholder="autor"
            value={author}
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
          />
        </div>
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
        {isSuccess && (
          <p className="todo-form__success-message">
            {' '}
            {title} dodano do listy zadań
          </p>
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
              setAddingMode(false);
            }}
          >
            Cofnij
          </button>
          <button
            className="big-button"
            onClick={() => {
              handleCreateTodo();
            }}
            disabled={!isReadyToSend}
          >
            Dodaj
          </button>
        </div>{' '}
      </div>
    </>
  );
}
