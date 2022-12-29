import React, {useState} from 'react'

import Button from './components/UI/Button/Button';
import DemoOutout from './components/Demo/DemoOutout';
import './App.css'

function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    const toggleParagraphHandler = () => {
        setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }

    console.log('APP RUNNING');

    return (
        <div className='app'>
            <h1>Hi there!</h1>
            <DemoOutout show={false}/>
            <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
        </div>
    )  
}

export default App