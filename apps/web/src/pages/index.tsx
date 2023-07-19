import { Button } from '@klat/ui'

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-screen flex-col space-y-5">
      <h1 className="text-7xl font-extralight">Hello from KLAT App</h1>
      <Button variant="primary" size="lg">
        Get stated
      </Button>
    </div>
  )
}
