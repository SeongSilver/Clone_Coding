import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    );
};

//컴포넌트를 리덕스와 연동하려면 react-redux에서 제공하는 connect 함수를 사용해야 하고
//connect(mapStatetoProps, mapDispatchtoProps)(연동할 컴포넌트)
//mapStateToProps, mapDispatchToProps에서 반환하는 객체 내부의 값들은
//컴포넌트의 props로 전달된다
//mapStateToProps는 state를 파라미터로 받아서 현재 스토어가 지니고 있는 상태를 가리키고
//mapDispatchToProps는 store의 내장함수 dispatch를 파라미터로 받아 온단
export default CounterContainer;
