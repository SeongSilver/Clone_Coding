import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    )
}

//컴포넌트를 리덕스와 연동하려면 react-redux에서 제공하는 connect 함수를 사용해야 하고
//connect(mapStatetoProps, mapDispatchtoProps)(연동할 컴포넌트)
//mapStateToProps, mapDispatchToProps에서 반환하는 객체 내부의 값들은
//컴포넌트의 props로 전달된다
//mapStateToProps는 state를 파라미터로 받아서 현재 스토어가 지니고 있는 상태를 가리키고
//mapDispatchToProps는 store의 내장함수 dispatch를 파라미터로 받아 온단
export default connect(
    state => ({
        number: state.counter.number,
    }),
    //connect의 두번째 파라미터로 객체를 넣어주면 내부족으로 bindActionCreator 작업을 대신해준다
    // {
    //     increase,
    //     decrease
    // },
    //위 객체는 원래 아래와 같은 모양
    dispatch => ({
        increase: () => dispatch(increase()),
        decrease: () => dispatch(decrease())
    })
)(CounterContainer);
