import React from 'react';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import { connect } from 'react-redux';

const TodosContainer = ({ input, todos, changeInput, insert, toggle, remove }) => {
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}
        />
    );
};

export default connect(
    ({ todos }) => ({
        input: todos.input,
        todos: todos.todos,
    }),
    {
        changeInput,
        insert,
        toggle,
        remove,
    }
    // dispatch => ({
    //     changeInput: () => dispatch(changeInput()),
    //     insert: () => dispatch(insert()),
    //     toggle: () => dispatch(toggle()),
    //     remove: () => dispatch(remove())
    // })
)(TodosContainer)
