import { createActions, handleActions } from 'redux-actions'

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = input => ({
    type: CHANGE_INPUT,
    input
});
// export const changeInput = createActions(CHANGE_INPUT, input => input);

let id = 3; //insert가 호출될 때마다 1씩 더해짐
export const insert = text => ({
    type: INSERT,
    todo: {
        id: id++,
        text,
        done: false
    }
});
// export const insert = createActions(INSERT, text => ({
//     id: id++,
//     text,
//     done: false
// }))

export const toggle = id => ({
    type: TOGGLE,
    id
});
// export const toggle = createActions(TOGGLE, id => id);

export const remove = id => ({
    type: REMOVE,
    id
});
// export const remove = createActions(REMOVE, id => id);

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done: false
        }
    ]
}

// function todos(state = initialState, action) {
//     switch (action.type) {
//         case CHANGE_INPUT:
//             return {
//                 ...state,
//                 input: action.input
//             };
//         case INSERT:
//             return {
//                 ...state,
//                 todos: state.todos.concat(action.todo)
//             }
//         case TOGGLE:
//             return {
//                 ...state,
//                 todos: state.todos.map(todo =>
//                     todo.id === action.id ? { ...todo, done: !todo.done } : todo)
//             }
//         case REMOVE:
//             return {
//                 ...state,
//                 todos: state.todos.filter(todo => todo.id !== action.id)
//             }

//         default:
//             return state;
//     }
// }

const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
        [INSERT]: (state, { payload: todo }) => ({
            ...state,
            todos: state.todos.concat(todo),
        }),
        [TOGGLE]: (state, { payload: id }) => ({
            ...state,
            todos: state.todos.map(todo =>
                todo.id === id ? { ...todo, done: !todo.done } : todo),
        }),
        [REMOVE]: (state, { payload: id }) => ({
            ...state,
            todos: state.todos.filter(todo => todo.id !== id)
        })
    },
    initialState
)

export default todos;