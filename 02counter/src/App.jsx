import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    // console.log("Value Added", Math.random());
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    // setCounter(counter + 1)

  }

  const removeValue = () => {
    setCounter(counter - 1)
  }



  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br /><br />
      <button onClick={removeValue}>remove Value {counter}</button>
    </>
  )
}

export default App
