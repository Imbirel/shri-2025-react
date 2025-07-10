import { useEffect, useState } from 'react';
import { NotesContext } from './context';
import { NoteService } from '../../services/note';

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => NoteService.getNotes());

  useEffect(() => {
    NoteService.setNotes(notes);
  }, [notes]);

  return <NotesContext.Provider value={{ notes, setNotes }}>{children}</NotesContext.Provider>;
};
