import { Note } from '../Note/Note';
import styles from './NotesList.module.css';

export const NotesList = function ({ notes, setNotes }) {
  return (
    <div className={styles.notesList}>
      {notes.map((note) => (
        <Note
          key={note.id}
          title={note.title}
          content={note.content}
          tags={note.tags}
          onDelete={() => {
            setNotes(notes.filter((currentNote) => currentNote.id !== note.id));
          }}
        />
      ))}
    </div>
  );
};
