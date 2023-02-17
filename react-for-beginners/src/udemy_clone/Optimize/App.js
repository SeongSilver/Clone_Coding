import React, {useState, useCallback} from 'react'

import Button from './components/UI/Button/Button';
import DemoOutout from './components/Demo/DemoOutout';
import './App.css'

function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);
    
    console.log('APP RUNNING');
    
    const toggleParagraphHandler = useCallback(() => {
        if (allowToggle) {
            setShowParagraph(prevShowParagraph => !prevShowParagraph);
        }
    }, [allowToggle]);
    const allowToggleHandler = () => {
        setAllowToggle(!allowToggle)
    }

    return (
        <div className='app'>
            <h1>Hi there!</h1>
            <DemoOutout show={showParagraph}/>
            <Button onClick={allowToggleHandler}>Allow Toggle!</Button>
            <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
        </div>
    )  
}

export default App