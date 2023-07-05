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

  // Version 1: function handleClickCounter(event: React.MouseEvent) {
  //   // This is the function we want to run every time the button get clicked!
  //   event.preventDefault()

  //   console.log('CLICKED!')

  //   // Increments the counter
  //   const newCounter = counter + 1

  //   // Tell React there is a new value for the count
  //   setCounter(newCounter)
  // }

  // Version 2: Re-do handleClickCounter() to be less lines of code.
  // function handleClickCounter(event: React.MouseEvent) {
  //   event.preventDefault()

  //   setCounter(counter + 1)
  // }

  // Version 3: is the INLINE arrow function written inside the <button onClick={...} </button>
  // See onClick button bellow.

  // track a second event
  const [name, setName] = useState('')
  // Second function to track another state, a name in input box.
  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  return (
    <div>
      <p>The count is {counter}</p>

      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <p>
        <input value={name} onChange={handleChangeInput} />
      </p>
      <p>{name}</p>
    </div>
  )
}
