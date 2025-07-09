import { Main } from './pages/Main/MainPage';
import { NoteProvider } from './contexts/Note/Provider';
import { BrowserRouter, Route, Routes } from 'react-router';
import { NotePage } from './pages/Note/NotePage';

function App() {
  return (
    <NoteProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="note/:noteId" element={<NotePage />} />
        </Routes>
      </BrowserRouter>
    </NoteProvider>
  );
}

export default App;
