import { Resolvers } from '@klat/graphql'
import { sayHello } from './query/sayHello'

export const resolvers: Resolvers = {
  Query: {
    sayHello,
  },
}
