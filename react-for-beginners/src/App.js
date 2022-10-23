import React from 'react'
import CounterContainer from './react-book/17-react-redux/containers/CounterContainer'
import Todos from './react-book/17-react-redux/Todos'

function App() {
    return (
        <div>
            <CounterContainer />
            <hr />
            <Todos />
        </div>
    )
}

export default App