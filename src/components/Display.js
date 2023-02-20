import React from 'react'

const Display = (props) => {
    const {current, previous, operation} = props;

  return (
    <input
    type="text"
    className="bg-gray-100 w-100 round mb-2 p-6 text-right text-4xl font-bold drop-shadow"
    value={previous + operation + current}
  />
  )
}

export default Display