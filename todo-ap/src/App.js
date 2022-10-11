import { useReducer, useRef, useCallback } from 'react';

import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import Clock from './components/Clock';
import Weather from './components/Weather';

import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'

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
  const backgroundArr = [img1, img2, img3, img4];

  const randomIndex = Math.floor(Math.random() * backgroundArr.length);

  const backgroundImg = backgroundArr[randomIndex];

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
  //useReducer 사용할 때는 원래 두번째 파라미터에 초기상태를 넣어주여야 하지만 undefined를 넣고
  //세번째 파라미터에 초기 상태를 만들어 주는 함수인 createBulkTodos를 넣어주는데 이렇게 하면 컴포넌트가 맨 처음 렌더링 될때만 createBulkTodosrk ghcnfehlsek
  //useReducer를 사용하는 방버은 기존 코드를 많이 고쳐야 한다는 단점이 있지만, 상태를 업데이트 하는 로직을 모아서 컴포넌트 바깥에 둘 수 있다는 장점이 있다 
  //성능상으로는 useState를 함수로 다루는 것과 useReducer가 비슷하다
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
    <div style={{ backgroundImage: `${backgroundImg}` }}>
      <Weather />
      <Clock />
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
}

export default App;
