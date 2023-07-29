import { useForm } from 'react-hook-form'
import { Button } from '@klat/ui'

type LoginForm = {
  username: string
  password: string
}

const Login = () => {
  const { register, handleSubmit } = useForm<LoginForm>()

  const onSubmit = (data: LoginForm) => {
    console.log(data)
  }
  return (
    <div className="flex justify-center items-center w-full h-screen flex-col space-y-5">
      <h1 className="text-7xl font-extralight">Login page</h1>
      <input type="text" {...register('username')} name="username" />
      <input type="text" {...register('password')} name="password" />
      <Button onClick={handleSubmit(onSubmit)}>Connect</Button>
    </div>
  )
}

export default Login
