import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)
  // let myObj = {
  //   username: "Swati",
  //   age: 21
  // }

  let newArr = {
    bunch: ["orange", "apple", "grapes"],
    name: "basket"
  }
  return (
    <>
      <h1 className='bg-blue-400 text-black p-5 rounded-xl'>Tailwind test</h1>
      <Card username="reactjs series" btnText="Click here" />
      <Card username="Swati aur javascript" />
    </>
  )
}

export default App
