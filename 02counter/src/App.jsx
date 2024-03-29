import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 15  //This variable will propogate but will not reflect in the UI


  const addValue = () => {
    if(counter < 10){
      setCounter(counter + 1)
    }
    else{
      counter = 10;
    }
    console.log("Value Added", counter);
  }

  const removeValue = () =>{
    if(counter > 0){
      setCounter(counter - 1);
    }
    else{
      counter = 0;
    }
    console.log("Value Removed", counter);
  }

  
  return (
    <>
    <h1>React Hooks</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )

}


export default App
