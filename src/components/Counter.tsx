import React, { useState } from 'react'

export function Counter() {
  // This will introduce useState
  // const valueAndSetMethod /* <- array */ = useState(
  //   0 /* initial state value desired */
  // )

  // const counter = valueAndSetMethod[0]
  // const setCounter = valueAndSetMethod[1]

  // inside useState(we set the desired starting point). the setCounter is a method we will call in step 3.
  const [counter, setCounter] = useState(0)

  function handleClickCounter(event: React.MouseEvent) {
    // This is the function we want to run every time the button get clicked!
    event.preventDefault()

    console.log('CLICKED!')

    // Increments the counter
    const newCounter = counter + 1

    // Tell React there is a new value for the count
    setCounter(newCounter)
  }

  return (
    <div>
      <p>The count is {counter}</p>
      <button onClick={handleClickCounter}>Increment</button>
    </div>
  )
}
