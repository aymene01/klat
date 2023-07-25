import { Context } from '@/graphql/context'
import { MutationResolvers } from '@klat/graphql'

export const createAccount: MutationResolvers<Context>['createAccount'] = (_root, args, ctx) => {
  return ctx.business.createAccount(ctx, args)
}
