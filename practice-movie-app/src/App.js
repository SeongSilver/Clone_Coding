import {useState, useEffect} from 'react';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  useEffect(()=>{},[]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return ;
    }
    /*setToDos(toDo와 모든 이전의 toDos까지 갖게 만든다는 함수를 만드는데 )
    현재의 배열을 받아와서 새로운 배열에 state에 있는 toDo를 앞에 넣고, 기존의 배열을 가져올때
    .(점)3개를 찍고 배열을 찍으면 배열의 요소들을 나열한 것과 같은 효과를 볼 수 있다
    */
    setToDos((currentArray)=>[toDo, ...toDos]);
    setToDo("");
  };
  console.log(toDos);
  console.log(toDos.map((item, index)=>(<li key={index}>{item}</li>)));
  return (
    <div>
      <h1>My ToDos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="Write your to do ..." 
          onChange={onChange}
          value={toDo}
        />
        <button>Add To Do</button>
        </form>
        <hr/>
        {/*map()은 배열의 각각의 element을 바꾸고 싶고 다 바뀐 새로운 배열을 갖고 싶을 때 
        map은 이 안에 함수를 넣을 수 있도록 해주는데 이 함수는 array의 모든 item에 대해 실행된다
        여기에서 무엇을 retuyrn하던지 간에  그 return 한 값이 새로운 배열에 들어가 있다

        map(해당 배열의 값, 인덱스, map()을 호출한 배열)
        */}
        <ul>
          {toDos.map(
            (item, index)=>(<li key={index}>{item}</li>
          ))}
        </ul>
    </div>
  );
}

export default App;
