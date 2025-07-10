import { Main } from './pages/Main/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router';
import { NotePage } from './pages/Note/NotePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="note/:noteId" element={<NotePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
