import { useReducer, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    })
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      // { type: 'INSERT', todo: { id: 1, text: 'todo', checked: false } }
      return todos.concat(action.todo);
    case 'REMOVE':
      // {type: 'REOMOVE', id:1}
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      // {type:'Remove', id:1}
      return todos.map(todo => todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,);
    default: return todos;
  }
}
function App() {
  // const [todos, setTodos] = useState(createBulkTodos)
  //고유값으로 사용될 id
  //ref를 사용하여 변수 담기
  // const nextId = useRef(2501);

  // const onInsert = useCallback(
  //   text => {
  //     const todo = {
  //       id: nextId.current,
  //       text,
  //       checked: false,
  //     };
  //     setTodos(todos => todos.concat(todo));
  //     nextId.current += 1; //nextId 1씩 더하기
  //   }, []
  // )

  // const onRemove = useCallback(
  //   id => {
  //     setTodos(todos => todos.filter(todo => todo.id !== id));
  //   }, []
  // )

  // const onToggle = useCallback(
  //   id => {
  //     setTodos(todos =>
  //       //특정 id를 가지고 있는 객체의 checked값을 반전시킨다 
  //       //불변성을 유지하면서 특정 배열 원소를 업데이트해야 할 때 이렇게 map을 사용
  //       todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
  //     )
  //   }, []
  // )
  //==========**useReducer 사용하기
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  const nextId = useRef(2501);
  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1; //nextId 1씩 더하기
  }, []);

  const onRemove = useCallback(id => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback(id => {
    dispatch({ type: 'TOGGLE', id });
  }, [])

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
