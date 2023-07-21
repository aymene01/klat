import { Button } from '@klat/ui'
import { useCount } from '@klat/hooks'

export default function Home() {
  const { count, increment } = useCount(0)

  return (
    <div className="flex justify-center items-center w-full h-screen flex-col space-y-5">
      <h1 className="text-7xl font-extralight">Hello from KLAT App</h1>
      <Button onClick={increment} variant="primary" size="lg">
        Get stated
      </Button>
      {count !== 0 && <p>You clicked {count} times</p>}
    </div>
  )
}
