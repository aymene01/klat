import { Button } from '@klat/ui'
// import { useSwrMutation } from '@/lib/hooks/useSwrMuation'
// import { useSwrQuery } from '@/lib/hooks/useSwrQuery'
import { AuthenticatedUser, MutationCreateAccountArgs, Hello } from '@klat/graphql'
import createAccount from '@/lib/queries/createAccount'
import sayHello from '@/lib/queries/sayHello'

export default function Home() {
  // const { mutate } = useSwrMutation<AuthenticatedUser, MutationCreateAccountArgs, 'createAccount'>({
  //   query: createAccount,
  // })

  // const { data } = useSwrQuery<Hello, 'sayHello'>({
  //   query: sayHello,
  //   queryKey: ['sayHello'],
  // })

  return (
    <div className="flex justify-center items-center w-full h-screen flex-col space-y-5">
      <h1 className="text-7xl font-extralight">Hello from KLAT App</h1>
      <Button
        onClick={() =>
          // mutate({
          //   username: 'helsllo',
          //   password: 'j',
          //   passwordConfirmation: 'j',
          // })
          alert('hello')
        }
        variant="primary"
        size="lg"
      >
        Get stated
      </Button>
      {/* {data && <p>{data.sayHello.message}</p>} */}
    </div>
  )
}
