import React, { useState } from 'react'

export function Counter() {
  // This will introduce useState
  const valueAndSetMethod /* <- array */ = useState(
    0 /* initial state value desired */
  )

  const counter = valueAndSetMethod[0]
  const setCounter = valueAndSetMethod[1]

  return (
    <div>
      <p>The count is {counter}</p>
      <button>Increment</button>
    </div>
  )
}
