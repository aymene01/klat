import { Options } from './types'
import * as auth from './auth'
import { isPasswordValid, isUsernameValid } from './validation'
import { partial } from 'lodash'

export const createIamService = (opts: Options) => {
  return {
    generateJwt: partial(auth.generateJwt, opts),
    verifyJwt: partial(auth.verifyJwt, opts),
    hashPassword: auth.hashPassword,
    comparePassword: auth.comparePassword,
    isPasswordValid,
    isUsernameValid,
  }
}

export type IamService = ReturnType<typeof createIamService>
