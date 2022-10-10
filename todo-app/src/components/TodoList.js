import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem
                    todo={todo}
                    key={todo.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    )
}

//React.memo를 사용한 최적화 코드는 현재 플젝 성능에 전혀 영향 X
//TodoList 컴포넌트의 부모 컴포넌트인App컴포넌트가 리렌더링되는 유일한 이유가 todos배열이 업데이트 될 때이기 때문

//App컴포넌트에 다른 state가 추가되어 해당 값들이 업데이트 될 때는 TodoList 컴포넌트가 
//불필요한 렌더링을 할 수도 잇기때문에 React.memo로 최적화
export default React.memo(TodoList);