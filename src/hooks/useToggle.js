import { useCallback } from 'react'
import { useReducer } from 'react'

const reducer = (state, action) => {
  const index = action.payload.indexOf(state)

  switch (action.type) {
    case 'TOGGLE':
      return action.payload instanceof Array
        ? action.payload[(index + 1) % action.payload.length]
        : action.payload
    default:
      return state
  }
}

export function useToggle(initialValue) {
  const [value, dispatch] = useReducer(reducer, initialValue[0])

  const toggle = useCallback(
    (value = initialValue) => {
      dispatch({
        type: 'TOGGLE',
        payload: value,
      })
    },
    [initialValue]
  )

  return [value, toggle]
}
