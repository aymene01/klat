import { Button } from '@klat/ui'
import { useSwrQuery } from '@/lib/hooks/useSwrQuery'
import { Hello } from '@klat/graphql'
import sayHello from '@/lib/queries/sayHello'
import { toast } from 'react-hot-toast'

export default function Home() {
  const { data } = useSwrQuery<Hello, 'sayHello'>({
    query: sayHello,
    queryKey: ['sayHello'],
  })

  return (
    <div className="flex justify-center items-center w-full h-screen flex-col space-y-5">
      <h1 className="text-7xl font-extralight">Hello from KLAT App</h1>
      <Button onClick={() => toast.error('We are not available yet')} variant="primary" size="lg">
        Get stated
      </Button>
      {data && <p>{data.sayHello.message}</p>}
    </div>
  )
}
