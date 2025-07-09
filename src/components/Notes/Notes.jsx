import { useCallback, useContext, useMemo, useState } from 'react';
import { Search } from '../Search/Search';
import { TagsList } from '../TagsList/TagsList';
import { NotesList } from '../NotesList/NotesList';
import { NotesContext } from '../../contexts/Note/context';

export function Notes() {
  const [searchQuery, setSearchQuery] = useState('');
  const { notes, setNotes } = useContext(NotesContext);

  const filteredNotes = useMemo(
    () =>
      notes.filter((note) => note.title.includes(searchQuery) || note.tags.includes(searchQuery)),
    [searchQuery, notes]
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
      <TagsList tags={uniqueTags} onTagClick={onTagClick} />
      <NotesList notes={filteredNotes} setNotes={setNotes} />
    </>
  );
}
