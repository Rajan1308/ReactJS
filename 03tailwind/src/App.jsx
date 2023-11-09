import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Rajan Gupta",
    age: 21
  }


  let newArr = [1, 2, 3]

  return (
    <>

      <h1 className='bg-green-400 p-4 text-black rounded-md'>Tailwind test</h1>
      {/* <Card channel="@rajangupta" someObj={myObj} /> */}

      <Card username="@rajan1308" btnText="Click Me" />
      <Card username="@rajan1308" />
      <Card username="@rajan1308" btnText="Explore My Profile" />
    </>
  )
}

export default App
