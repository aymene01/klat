import React from 'react'

type UseCount = {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

export const useCount = (initialState: number): UseCount => {
  const [count, setCount] = React.useState(initialState)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return {
    count,
    increment,
    decrement,
    reset,
  }
}
