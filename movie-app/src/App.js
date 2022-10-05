import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Main from './home/Main';
import Detail from './components/Detail';

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route path={"/movie/:id"} element={<Detail />} />
    </Routes>
  )
}

export default App