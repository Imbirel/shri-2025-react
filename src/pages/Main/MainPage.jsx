import { useCallback, useContext } from 'react';
import { Header } from '../../components/Header/Header';
import { NotesForm } from '../../components/NotesForm/NotesForm';
import styles from './MainPage.module.css';
import { NotesContext } from '../../contexts/Note/context';
import { Notes } from '../../components/Notes/Notes';

export function Main() {
  const { notes, setNotes } = useContext(NotesContext);

  const onAddNote = useCallback(
    (note) => {
      setNotes((prevNotes) => [...prevNotes, note]);
    },
    [notes]
  );

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header notesCount={notes.length} />
        <NotesForm onAddNote={onAddNote} />
        <Notes />
      </div>
    </div>
  );
}
