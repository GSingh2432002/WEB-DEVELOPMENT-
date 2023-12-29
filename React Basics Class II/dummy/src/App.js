import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[text,setText] = useState('');
  const[name,setName] = useState('Gaurav');

  // variation - 1 Every Render
  // useEffect( () => {
  //   console.log("UI RENDERING DONE");
  // }); 

  // variation - 2 First Render
  // useEffect(()=>{
  //   console.log("UI RENDERING DONE");
  // },[]);

  // variation - 3 first render + whenver dependency changes
  // useEffect(() =>{
  //   console.log("chain observed")
  // },[name]);

  //variation - 4 to handle unmounting of a component
  useEffect(() =>{
    //add event listener
    console.log("listener added");

    return () => {
      console.log("listener removed");
    }
  },[text]);

  function changeHandler(event) {
    console.log(text);
    setText(event.target.value);
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
