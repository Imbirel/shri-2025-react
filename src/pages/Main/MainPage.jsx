import { Header } from '../../components/Header/Header';
import { NotesForm } from '../../components/NotesForm/NotesForm';
import styles from './MainPage.module.css';
import { Notes } from '../../components/Notes/Notes';
import { useStore } from '../../store';

export function Main() {
  const notes = useStore((store) => store.notes);
  const addNote = useStore((store) => store.addNote);

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header notesCount={notes.length} />
        <NotesForm onAddNote={addNote} />
        <Notes />
      </div>
    </div>
  );
}
