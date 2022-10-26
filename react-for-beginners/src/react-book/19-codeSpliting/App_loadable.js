import React from 'react';
import { useState } from 'react';
import loadable from '@loadable/component';
import logo from './logo.svg';
import './App.css';

const SplitMe = loadable(() => import('../../../../splitting-sample/src/SplitMe'), {
  fallback: <div>Loading...</div>
})
function App() {
  // const onClick = () => {
  //import를 함수로 사용하면 Promise를 반환하고 웹팩이 해당 함수 파일을 따로 분리시켜서 저장한다
  //그리고 실제 함수가 필요한 지접에 파일을 불러와서 함수를 사용할 수 있다

  //import를 함수로 사용하는 문법은 stage-3에 있는 dynamic import 문법이다
  //웹팩에서 지원하고 있으므로 별도의 설정 없이 프로젝트에 바로 사용할 수 있다
  // import('./notify').then(result => result.default());
  // }
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(!visible);
  }
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ 'cursor': 'pointer' }} onClick={onClick} onMouseOver={onMouseOver}>Hello React!</p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;

// class App extends Component {
//   state = {
//     SplitMe: null
//   };
//   handleClick = async () => {
//     const loadedModule = await import('./SplitMe');
//     this.setState({
//       SplitMe: loadedModule.default
//     });
//   };
//   render() {
//     const { SplitMe } = this.state;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p onClick={this.handleClick}>Hello React!</p>
//           {SplitMe && <SplitMe />}
//         </header>
//       </div>
//     )
//   }
// }