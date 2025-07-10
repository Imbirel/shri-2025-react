const STORAGE_KEY = 'notes';

export const NoteService = {
  setNotes(notes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));

    return notes;
  },

  getNotes() {
    const savedNotes = JSON.parse(localStorage.getItem(STORAGE_KEY));

    return savedNotes ? savedNotes : [];
  },

  verify(note) {
    if (!note.title.trim()) {
      return false;
    }

    return true;
  },
};
