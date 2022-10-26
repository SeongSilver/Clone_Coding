import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import RedPage from './pages/RedPages';
import BluePage from './pages/BluePage';

const App_ssr = () => {
    return (
        <div className="App">
            <Menu />
            <hr />
            <Routes>
                <Route path="/red" element={<RedPage />} />
                <Route path="/blue" element={<BluePage />} />
            </Routes>
        </div>
    )
}

export default App_ssr;