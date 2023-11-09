import './App.css';
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0)

  function clickCheck() {
    setCount(count + 1)
  }
  function MyButton({count, onClick}){
    return <button onClick={onClick}>Click {count} times!</button>
  }
  return (
      <div>
        <h1>sdsdsd</h1>
        <MyButton count={count} onClick={clickCheck}></MyButton>
        <MyButton count={count} onClick={clickCheck}></MyButton>
      </div>
      )

}

export default App;
