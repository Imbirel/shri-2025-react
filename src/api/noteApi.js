import { createStorage } from './storage';

const STORAGE_KEY = 'notes';

const storage = createStorage(STORAGE_KEY);

export const NoteApi = {
  setNotes(notes) {
    storage.setItem(notes);

    return notes;
  },

  getNotes() {
    const savedNotes = storage.getItem();

    return savedNotes ? savedNotes : [];
  },
};
