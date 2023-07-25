import { Resolvers } from '@klat/graphql'
import { sayHello } from './query'
import { createAccount, createSession } from './mutation'

export const resolvers: Resolvers = {
  Query: {
    sayHello,
  },
  Mutation: {
    createAccount,
    createSession,
  },
}
