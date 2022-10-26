import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { applyMiddleware, createStore } from 'redux';
import rootReducer, { rootSaga } from './react-book/18-learn-redux-middleware/modules/rootReducer';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from '../node_modules/redux-thunk/es/index';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk, sagaMiddleware)));
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
