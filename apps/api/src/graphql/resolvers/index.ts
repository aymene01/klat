import { Resolvers } from '@klat/graphql'
import { sayHello } from './query/sayHello'
import { createAccount } from './mutation/createAccount'
import { createSession } from './mutation/createSession'

export const resolvers: Resolvers = {
  Query: {
    sayHello,
  },
  Mutation: {
    createAccount,
    createSession,
  },
}
