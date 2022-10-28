import { createContext, useContext } from 'react';

//클라이언트 환경 : null
//서버환경 : {done: false, promise: []}
const PreloadContext = createContext(null);
export default PreloadContext;

//resolve는 함수타입
//resolve라는 함수를 props로 받아와서 컴포넌트가 렌더링될때
//서버 환경에서만 resolve 함수를 호출해 준다
export const Preloader = ({ resolve }) => {
    const preloadContext = useContext(PreloadContext);
    //클라이언트에서 실행을 막도록 하는 코드
    if (!preloadContext) return null; //context값이 유효하지 않다면 아무것도 하지않음
    if (preloadContext.done) return null; //이미 작업이 끝났다면 아무것도 하지않음

    //promises 배열에 프로미스 등록
    //resolve 함수가 프로미스를 반환하지 않더라도, 프로미스 취급을 하기 위해
    //Promise.resolve 함수 사용
    //사전적재 컨텍스트가 미완료라면
    //주어진 resolve()반환 값으로 then문을 실행할 수 있는 Promise객체를 생성해 PreloadContext promises에 쌓기
    preloadContext.promises.push(Promise.resolve(resolve()));
    return null;
}
/**
 * PreloadContext는 서버 사이드 렌더링을 하는 과정에서 처리해야 할 작업들을 실행하고
 * 만약 기다려야 하는 프로미스가 있다면 프로미스를 수집한다
 * 모든 프로미스를 수집한 후 수집된 프로미스들이 끝날 때까지 기다렷다가
 * 다시 렌더링하면 데이터가 채워진 상태로 컴포넌트들이 나타난다
 * 
 */