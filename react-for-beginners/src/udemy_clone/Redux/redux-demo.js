const redux = require("redux");

//리듀서에서 상태 객체 리턴
//최초 실행될 때 값이 있게 initialState를 설정해주거나 매개변수 안에서 선언해줘야 상태가 정의된다
const counterReducer = (state = { counter: 0 }, action) => {
  //리듀서에서는 상태 객체를 리턴
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
};

//스토어를 생성하고 리듀서 연결
//리듀서 함수는 우리가 실행시키는 것이 아니라 Redux가 실행시키는 것. 가리키기만 하는것이 우리 역할
const store = redux.createStore(counterReducer);

//스토어를 구독하는 함수
const counterSubscriber = () => {
  //getState()는 createStore()로 생성된 저장소에서 사용할 수 있는 메서드
  //업데이트 후 최신 상태의 스냅샷 제공
  //화살표 함수(구독 함수)는 상태가 변경될 때마다 트리거됨
  const latestState = store.getState();
  console.log(latestState);
};

//리덕수가 위 구독함수를 인식하도록 하고 상태 변경할 때마다 함수를 실행하라고 알려주는 역할
//리덕스는 데이터와 저장소가 변경될 때마다 counterSubscriber 함수를 실행시킴
//*****************우리가 counterSubscriber를 실행하지 않는다는 점이 중요. Redux가 실행시킴
store.subscribe(counterSubscriber);

//dispatch : 액션을 발송하는 메서드, action은 자바스크립트 객체
//새로운 액션을 발송 하면 리듀서 함수를 다시 실행시켜서 카운트가 증가함
store.dispatch({ type: "increment" });
