import { Options } from '@/business/types'
import { Context } from '@/graphql/context'
import { AuthenticatedUser, MutationCreateSessionArgs } from '@klat/graphql'
import { GraphQLError } from 'graphql'

export const createSession = async (
  opts: Options,
  _ctx: Context,
  req: MutationCreateSessionArgs,
): Promise<AuthenticatedUser> => {
  const user = await opts.database.prisma.user.findUnique({
    where: {
      username: req.username,
    },
  })

  if (!user) {
    throw new GraphQLError('Invalid email or password')
  }

  const passwordCorrect = await opts.iamService.comparePassword(req.password, user.password)

  if (!passwordCorrect) {
    throw new GraphQLError('Invalid email or password')
  }

  const { username, uuid } = user

  const token = opts.iamService.generateJwt({ username, uuid })

  return {
    meta: {
      token,
    },
    user: {
      username,
      uuid,
    },
  }
}
