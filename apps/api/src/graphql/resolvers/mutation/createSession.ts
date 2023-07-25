import { Context } from '@/graphql/context'
import { MutationResolvers } from '@klat/graphql'

export const createSession: MutationResolvers<Context>['createSession'] = (_, args, ctx) => {
  return ctx.business.createSession(ctx, args)
}
