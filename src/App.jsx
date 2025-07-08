import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { NotesList } from './components/NotesList/NotesList';
import { NotesForm } from './components/NotesForm/NotesForm';
import { Search } from './components/Search/Search';
import { TagsList } from './components/TagsList/TagsList';

const LOCAL_STARAGE_KEY = 'notes';

const NotesContext = createContext();

function Notes() {
  const { notes, setNotes } = useContext(NotesContext);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotes = notes.filter(
    (note) => note.title.includes(searchQuery) || note.tags.includes(searchQuery)
  );
  const uniqueTags = useMemo(
    () => [...new Set(notes.reduce((acc, note) => acc.concat(note.tags), []))],
    [notes]
  );

  const onTagClick = useCallback(
    (tag) => {
      setSearchQuery(tag);
    },
    [setSearchQuery]
  );

  return (
    <>
      <Search value={searchQuery} onChange={setSearchQuery} />
      {uniqueTags.length > 0 && <TagsList tags={uniqueTags} onTagClick={onTagClick} />}
      {filteredNotes.length > 0 && <NotesList notes={filteredNotes} setNotes={setNotes} />}
    </>
  );
}

function Main() {
  const { notes, setNotes } = useContext(NotesContext);

  const onAddNote = useCallback(
    (note) => {
      setNotes([...notes, note]);
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

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem(LOCAL_STARAGE_KEY);

    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STARAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      <Main />
    </NotesContext.Provider>
  );
}

export default App;
