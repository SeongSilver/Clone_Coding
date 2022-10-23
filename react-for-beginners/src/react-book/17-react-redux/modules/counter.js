//액션 타입 정의
//모듈이름 / 액션 과 같은 형태로 정의함으로써 
//프로젝트가 커졌을 대 액션의 이름이 충돌하지 않게 해줌
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 생성함수
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

//모듈의 초기 상태
const initialState = {
    number: 0
}

function counter(state = initialState, actions) {
    switch (actions.type) {
        case INCREASE:
            return {
                number: state.number + 1
            }
        case DECREASE:
            return {
                number: state.number - 1
            }
        default:
            return state;
    }
}

export default counter;