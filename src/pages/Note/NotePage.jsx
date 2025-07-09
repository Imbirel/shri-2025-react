import { useParams } from 'react-router';
import { NotesContext } from '../../contexts/Note/context';
import { useContext } from 'react';
import { Note } from '../../components/Note/Note';

export const NotePage = () => {
  const params = useParams();
  const { notes } = useContext(NotesContext);

  const note = notes.find(({ id }) => id === params.noteId);

  return (
    <div>
      <Note {...note} />
    </div>
  );
};
