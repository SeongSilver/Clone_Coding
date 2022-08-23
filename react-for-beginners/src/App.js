// import Button from './Button';
// import styles from './App.module.css';
/*컴포넌트를 스타일링 할 떄 CSS Module 이라는 기술을 사용하면 CSS 클래스가 중첩되는 것을 완벽히 방지할 수 있따.
CRA로 만든 프로젝트에서 CSS Module을 사용할 때는 CSS파일의 확장자를 .module.css.로 한다.
리액트 컴포넌트 파일에서 해당 css 파일을 불러올 때 css파일에 선언한 클래스 이름들이 모유 고유해진다(랜덤으로 정해짐)
고유 css 클래스 이름이 만들어지는 과정에서는 파일 경로, 파일이름, 클래스 이름, 해쉬값 등이 사용된다

ex)Box.module.css 에서 클래스 이름을 boxBtn으로 사용할 경우 사용할 js파일에 import styles from '파일경로/파일이름'을 해준 후 
클래스 이름에 className={styles.boxBtn}으로 사용하면 나머지 이름을 고유한 이름으로 만들기 때문에 
실수로 css 클래스 이름이 다른 관계 없는 곳에서 사용한 css클래스 이름과 중복되는 일에 대하여 걱정할 필요가 없어진다*/
import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev+1);
  console.log("I run all the time");
  const iRunOnlyOnce = () => {
    console.log("I run only once");
  }
  useEffect(() => {
    console.log("CALL THE API");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click</button>      
      {/* <h1 className={styles.title}>Welcome Back!</h1>
      <Button text={"Continue"}/> */}
    </div>
  );
}

export default App;
