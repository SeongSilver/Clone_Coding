//일반 function 키워드로 풀어쓰면 함수 안에 리턴문안에 함수의 리턴문안에 다른 함수가 있는 형식
//미들웨어는 함수를 반환하는 함수
const loggerMiddleware = store => next => action => {
    console.group(action && action.type); //액션 타입으로 log를 그룹화
    console.log('이전상태', store.getState());
    console.log('액션', action);
    next(action); //다음 미들웨어 혹은 리듀서에게 전달
    console.log('다음 상태', store.getState()); //업데이트된 상태
    console.groupEnd();//그룹 끝
};

export default loggerMiddleware;