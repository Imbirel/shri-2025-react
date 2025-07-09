import { Main } from './pages/Main/MainPage';
import { NoteProvider } from './contexts/Note/Provider';

function App() {
  return (
    <NoteProvider>
      <Main />
    </NoteProvider>
  );
}

export default App;
