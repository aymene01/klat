import { Options } from '@/business/types'
import { Context } from '@/graphql/context'
import { AuthenticatedUser, MutationCreateAccountArgs } from '@klat/graphql'
import { GraphQLError } from 'graphql'
import {
  ERR_INVALID_USERNAME,
  ERR_INVALID_PASSWORD,
  ERR_PASSWORD_MISMATCH,
  ERR_USER_ALREADY_EXISTS,
} from '@/lib/helpers/constant'

export const createAccount = async (
  opts: Options,
  _ctx: Context,
  req: MutationCreateAccountArgs,
): Promise<AuthenticatedUser> => {
  // Validation of username and password
  if (!opts.iamService.isUsernameValid(req.username)) {
    throw new GraphQLError(ERR_INVALID_USERNAME)
  }

  if (!opts.iamService.isPasswordValid(req.password)) {
    throw new GraphQLError(ERR_INVALID_PASSWORD)
  }

  if (req.password !== req.passwordConfirmation) {
    throw new GraphQLError(ERR_PASSWORD_MISMATCH)
  }

  const userExist = await opts.database.prisma.user.findUnique({
    where: {
      username: req.username,
    },
  })

  if (userExist) {
    throw new GraphQLError(ERR_USER_ALREADY_EXISTS)
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
