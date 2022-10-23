import React from 'react'
import CounterContainer from './react-book/17-react-redux/containers/CounterContainer'
import TodosContainer from './react-book/17-react-redux/containers/TodosContainer'

function App() {
    return (
        <div>
            <CounterContainer />
            <hr />
            <TodosContainer />
        </div>
    )
}

export default App