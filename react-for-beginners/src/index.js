import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './react-book/18-learn-redux-middleware/modules/rootReducer';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from '../node_modules/redux-thunk/es/index';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
