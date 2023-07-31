import { useCallback, useEffect, useRef, useReducer } from 'react'
import { useSafeDispatch } from './useSafeDispatch'

type Status = 'idle' | 'pending' | 'resolved' | 'rejected'

type State<T> = {
  status: Status
  data: T | null
  error: Error | null
}

/**
 * @description a hook for using async calls with ease
 **/

export const useAsync = <T>(initialState: State<T> = { status: 'idle', data: null, error: null }) => {
  const initialStateRef = useRef<State<T>>(initialState)

  const [{ status, data, error }, unsafeSetState] = useReducer(
    (state: State<T>, action: Partial<State<T>>) => ({ ...state, ...action }),
    initialStateRef.current,
  )

  const setState = useSafeDispatch(unsafeSetState)

  const setData = useCallback((data: T) => setState({ data, status: 'resolved' }), [setState])
  const setError = useCallback((error: Error) => setState({ error, status: 'rejected' }), [setState])
  const reset = useCallback(() => setState(initialStateRef.current), [setState])

  const run = useCallback(
    (promise: Promise<T>) => {
      if (!promise || typeof promise.then !== 'function') {
        throw new Error(
          `The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?`,
        )
      }
      setState({ status: 'pending' })
      return promise.then(
        (data: T) => {
          setData(data)
          return data
        },
        (error: Error) => {
          setError(error)
          return Promise.reject(error)
        },
      )
    },
    [setData, setError, setState],
  )

  return {
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isError: status === 'rejected',
    isSuccess: status === 'resolved',

    data,
    error,
    status,
    run,
    setData,
    setError,
    reset,
  }
}
