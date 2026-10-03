import React from 'react'
// import { useState } from 'react'

const Counter = () => {

  const [count, setCount] = React.useState(0)
  
  function increment() {
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    setCount(prev => prev + 1) 
    setCount(prev => prev + 1) 
    setCount(prev => prev + 1) 
  }
  return (
    <>
     <div>Counter</div>
    <button onClick={increment}>Increment value:{count}</button></>
  )
}

export default Counter