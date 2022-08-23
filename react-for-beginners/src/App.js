// import Button from './Button';
// import styles from './App.module.css';
/*컴포넌트를 스타일링 할 떄 CSS Module 이라는 기술을 사용하면 CSS 클래스가 중첩되는 것을 완벽히 방지할 수 있따.
CRA로 만든 프로젝트에서 CSS Module을 사용할 때는 CSS파일의 확장자를 .module.css.로 한다.
리액트 컴포넌트 파일에서 해당 css 파일을 불러올 때 css파일에 선언한 클래스 이름들이 모두 고유해진다(랜덤으로 정해짐)
고유 css 클래스 이름이 만들어지는 과정에서는 파일 경로, 파일이름, 클래스 이름, 해쉬값 등이 사용된다

ex)Box.module.css 에서 클래스 이름을 boxBtn으로 사용할 경우 사용할 js파일에 import styles from '파일경로/파일이름'을 해준 후 
클래스 이름에 className={styles.boxBtn}으로 사용하면 나머지 이름을 고유한 이름으로 만들기 때문에 
실수로 css 클래스 이름이 다른 관계 없는 곳에서 사용한 css클래스 이름과 중복되는 일에 대하여 걱정할 필요가 없어진다*/
import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev+1);
  const onChange = (event) => setKeyword(event.target.value);
  const iRunOnlyOnce = () => {
    console.log("I run only once");
  }
  useEffect(() => {
    console.log("I run only once");
  }, []);
  {/*코드의 특정한 부분만이 변화했을 때, 원하는 코드들을 실행할 수 있는 방법 */}
  useEffect(() => {
    // if(keyword !== "" && keyword.length>5){
    //   console.log("SEARCH FOR", keyword);
    // }
    console.log("I run when 'keyword' changes.")
    {/*keyword가 변화할 때 코드를 실행하고 싶으면 []자리에 keyword를 적어준다
    keyword가 변화할 때 코드를 실행할 것이라고 react.js에게 알려주는 것
    위 console.log("SEARCH FOR", keyword);이 있는 useEffect()의 두번째 매개변수가 비었을 때는
    값이 없기 때문에 한번만 실행하고 더이상 실행 되지 않는 것.
    즉, 두번째 매개변수는 해당 변수 값이 변할 때만 이펙트를 실행하라는 의미*/}
  }, [keyword]);
  useEffect(()=>{
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(()=>{
    console.log("I run when 'keyword' & 'counter' changes.");
  }, [keyword, counter]);
  return (
    <div>
      <input 
      value={keyword}
      onChange={onChange}
      type="text" 
      placeholder="Search here..."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click</button>      
      {/* <h1 className={styles.title}>Welcome Back!</h1>
      <Button text={"Continue"}/> */}
    </div>
  );
}

export default App;
