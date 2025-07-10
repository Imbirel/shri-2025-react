import { NoteApi } from '../api/noteApi';

export const NoteService = {
  setNotes(notes) {
    NoteApi.setNotes(notes);

    return notes;
  },

  getNotes() {
    const savedNotes = NoteApi.getNotes();

    return savedNotes ? savedNotes : [];
  },

  verify(note) {
    if (!note.title.trim() || note.title[0] === 'A') {
      return false;
    }

    return true;
  },
};
