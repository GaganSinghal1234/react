import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(5)
  const addValue = () => {
    setCounter(counter + 1)
    console.log(`clicked ${counter}`);
  }
  const decreaseValue = () => {
    setCounter(counter - 1)
    console.log(`clicked ${counter}`);
  }

  return (
    <>
      <h1>helloworld
      </h1>
      <h2>Counter value:{counter}</h2>
      <button
        onClick={addValue}
      >ADD Value </button>
      <button onClick={decreaseValue} >decrease value</button>
    </>

  )
}

export default App
