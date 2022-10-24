import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DEREEASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DEREEASE);

//1초 뒤에 increase혹은 decrease함수를 디스패치함
export const increaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(increase());
    }, 1000);
}
export const decreaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrease());
    }, 1000);
}

const initialState = 0;

const counter = handleActions(
    {
        [increase]: state => state + 1,
        [decrease]: state => state - 1,
    },
    initialState
)

export default counter;