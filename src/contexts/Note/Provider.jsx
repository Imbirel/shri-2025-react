import { useEffect, useState } from 'react';
import { NotesContext } from './context';

const STORAGE_KEY = 'notes';

export const NoteProvider = ({ children, storageKey = STORAGE_KEY }) => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem(storageKey));
    return savedNotes ? savedNotes : [];
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(notes));
  }, [notes]);

  return <NotesContext.Provider value={{ notes, setNotes }}>{children}</NotesContext.Provider>;
};
