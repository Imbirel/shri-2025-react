import { useCallback, useMemo, useState } from 'react';
import { Search } from '../Search/Search';
import { TagsList } from '../TagsList/TagsList';
import { NotesList } from '../NotesList/NotesList';
import { useStore } from '../../store';

export function Notes() {
  const [searchQuery, setSearchQuery] = useState('');
  const notes = useStore((store) => store.notes);

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
      <NotesList notes={filteredNotes} />
    </>
  );
}
