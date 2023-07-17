import { Database } from '@/database'
import { IamService } from '@/iam/createIamService'
import { Logger } from '@klat/toolbox'

export type Options = {
  logger: Logger
  database: Database
  iamService: IamService
}
