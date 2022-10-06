import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Header from './Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Header/>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </>
);
