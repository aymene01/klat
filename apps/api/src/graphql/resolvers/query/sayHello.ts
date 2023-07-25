import { QueryResolvers } from '@klat/graphql'
import { Context } from '@/graphql/context'

export const sayHello: QueryResolvers<Context>['sayHello'] = (_root, _input, ctx) => {
  return ctx.business.sayHello()
}
