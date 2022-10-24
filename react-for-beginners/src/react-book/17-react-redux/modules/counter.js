import { createAction, handleActions } from 'redux-actions'

//액션 타입 정의
//모듈이름 / 액션 과 같은 형태로 정의함으로써 
//프로젝트가 커졌을 대 액션의 이름이 충돌하지 않게 해줌
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 생성함수
// export const increase = () => ({ type: INCREASE })
// export const decrease = () => ({ type: DECREASE })
//createActions를 사용하면 매번 객체를 직접 만들어 줄 필요 없이
//더욱 간단하게 액션 생성 함수르 선언할 수 있다.
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);


//모듈의 초기 상태
const initialState = {
    number: 0
}

// function counter(state = initialState, actions) {
//     switch (actions.type) {
//         case INCREASE:
//             return {
//                 number: state.number + 1
//             }
//         case DECREASE:
//             return {
//                 number: state.number - 1
//             }
//         default:
//             return state;
//     }
// }

//HANDLEaCTIONS 함수의 첫 번째 파라미터에는 각 액션에 대한 업데이트 함수(함수를 담은 객체)
//두번째 파라미터에는 초기 상태를 넣어준다
const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 })
    },
    initialState
)

export default counter;