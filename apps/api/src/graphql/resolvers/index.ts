const resolvers = {
  Query: {
    sayHello: () => ({
      message: 'hey from the GraphQL server',
    }),
  },
}

export { resolvers }
