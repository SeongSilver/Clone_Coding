import React from 'react'
import logo from '../../logo.svg';
import './NormalCss.css';

function NormalCss() {
    return (
        <header className="App-header">
            <img src={logo} className="logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_black"
                rel="noopener noreferrer"
            >Learn React</a>
        </header>
    )
}

export default NormalCss