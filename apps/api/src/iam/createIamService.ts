import { Options } from './types'
import * as auth from './auth'
import { partial } from 'lodash'

export const createIamService = (opts: Options) => {
  return {
    generateJwt: partial(auth.generateJwt, opts),
    verifyJwt: partial(auth.verifyJwt, opts),
    hashPassword: auth.hashPassword,
    comparePassword: auth.comparePassword,
  }
}

export type IamService = ReturnType<typeof createIamService>
