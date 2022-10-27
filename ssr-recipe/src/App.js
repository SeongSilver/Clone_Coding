import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import RedPage from './pages/RedPages';
import BluePage from './pages/BluePage';

function App() {
  return (
    <div className="App">
      <Menu />
      <hr />
      <Routes>
        <Route path='/red' element={<RedPage />} />
        <Route path='/blue' element={<BluePage />} />
      </Routes>
    </div>
  );
}

export default App;
