import { Options } from '@/business/types'
import { Context } from '@/graphql/context'
import { AuthenticatedUser, MutationCreateAccountArgs } from '@klat/graphql'
import { GraphQLError } from 'graphql'

export const createAccount = async (
  opts: Options,
  _ctx: Context,
  req: MutationCreateAccountArgs,
): Promise<AuthenticatedUser> => {
  if (req.password !== req.passwordConfirmation) throw new GraphQLError('Password missmatch')

  const userExist = await opts.database.prisma.user.findUnique({
    where: {
      username: req.username,
    },
  })

  if (userExist) {
    throw new GraphQLError('User Already Exist')
  }

  const hash = await opts.iamService.hashPassword(req.password)

  const user = await opts.database.prisma.user.create({
    data: {
      username: req.username,
      password: hash,
    },
  })

  const { username, uuid } = user

  const token = opts.iamService.generateJwt({ username, uuid })

  return {
    meta: {
      token,
    },
    user,
  }
}
