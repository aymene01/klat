import { Resolvers } from '@klat/graphql'

export const resolvers: Resolvers = {
  Query: {
    sayHello: () => ({
      message: 'hey from the GraphQL server',
    }),
  },
}
