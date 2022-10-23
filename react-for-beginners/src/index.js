import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { createStore } from 'redux';
import rootReducer from './react-book/17-react-redux/modules/rootReducer';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(rootReducer, devToolsEnhancer());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
