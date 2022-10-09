import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.css';

const TodoInsert = () => {
    const [value, setValue] = useState('');
    const onChange = useCallback(event => {
        setValue(event.target.value)
    }, []);//컴포넌트가 처음 렌더링 될때만 함수 생성
    console.log(value);
    return (
        <form className="TodoInsert">
            <input
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert