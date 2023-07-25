import { Resolvers } from '@klat/graphql'
import { sayHello } from './query/sayHello'
import { createAccount } from './mutation/createAccount'

export const resolvers: Resolvers = {
  Query: {
    sayHello,
  },
  Mutation: {
    createAccount,
  },
}
