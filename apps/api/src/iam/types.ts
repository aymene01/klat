import { Database } from '@/database'
import { Logger } from '@klat/toolbox'

export type Options = {
  logger: Logger
  database: Database
  jwtSecretKey: string
  // in ms
  jwtDuration: number
}
