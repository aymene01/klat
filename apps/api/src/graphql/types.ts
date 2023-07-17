import { Business } from '@/business/createBusiness'
import { Logger } from '@klat/toolbox'

export type Options = {
  logger: Logger
  business: Business
  mountPath: string
  enableIntrospection: boolean
  enableDebug: boolean
  keepAliveTimeout: number
  listenAddr: { host: string; port: number }
  typeDefs: string
}
