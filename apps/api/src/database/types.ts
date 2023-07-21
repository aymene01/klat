import { Logger } from '@klat/toolbox'

export type DatabaseOption = {
  logger: Logger
  databaseUrl: string
  connectionPoolSize: number
  queryTimeout: number
}
