import React from 'react'
import ColorBox from './react-book/15-ContextAPI/components/ColorBox'
import SelectColor from './react-book/15-ContextAPI/components/SelectColor'
import { ColorProvider } from './react-book/15-ContextAPI/context/color'

function App() {
    return (
        <ColorProvider>
            <div className="App">
                <SelectColor />
                <ColorBox />
            </div>
        </ColorProvider>
    )
}

export default App