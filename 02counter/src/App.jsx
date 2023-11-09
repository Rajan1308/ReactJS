import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let counter = 15

   const addValue = () => {
    // console.log("Value Added", Math.random());
    counter = counter +1
   }




  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br /><br />
      <button>remove Value</button>
    </>
  )
}

export default App
