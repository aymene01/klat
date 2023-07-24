import * as React from 'react'

type Dispatch<Action> = (...args: Action[]) => void

export const useSafeDispatch = <Action>(dispatch: Dispatch<Action>) => {
  const mountedRef = React.useRef(false)

  React.useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  return React.useCallback(
    (...args: Action[]) => {
      if (mountedRef.current) {
        dispatch(...args)
      }
    },
    [dispatch],
  )
}
