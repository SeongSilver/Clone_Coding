import {
  //Browser Router에서 URL은 예상하는대로 보통 웹사이트 처럼 생김
  //HashRouter는 기본 주소 뒤에 #이 붙는다
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return <Router>
    {/*ReactRouter에서는 원한다면 두개의 Router를 한 번에 렌더링 할 수 있는데
    한 번에 하나의 Router만 렌더링 하기 위해서 switch 컴포넌트를 사용한다*/}
    <Switch>
      <Route path="/movie/:id">
        <Detail/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
  </Router>;
}

export default App;
