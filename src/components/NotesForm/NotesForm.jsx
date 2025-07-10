import { memo, useState } from 'react';
import styles from './NotesForm.module.css';
import { NoteService } from '../../services/note';

export const NotesForm = function NotesForm({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [error, setError] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    if (!NoteService.verify({ title, content, tags })) {
      setError('Необходимо указать заголовок');
      return;
    }

    const note = {
      title,
      content,
      tags: tags.length ? tags.split(',') : [],
      id: Math.random().toString(),
    };

    onAddNote(note);

    setTitle('');
    setContent('');
    setTags('');
  };

  return (
    <form className={styles.notesForm}>
      <input
        type="text"
        placeholder="Заголовок заметки"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
          if (error) {
            setError('');
          }
        }}
        className={styles.inputField}
      />
      {Boolean(error.length) && <span className={styles.errors}>{error}</span>}
      <textarea
        placeholder="Содержание заметки"
        className={styles.inputField}
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Теги (через запятую)"
        className={styles.inputField}
        value={tags}
        onChange={(event) => {
          setTags(event.target.value);
        }}
      />
      <button type="submit" className={styles.button} onClick={onSubmit}>
        Добавить заметку
      </button>
    </form>
  );
};
