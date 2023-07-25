import { Options } from './types'
import { sayHello } from './domains/sayHello'
import { createAccount } from './domains/auth'
import { createSession } from './domains/auth'
import { partial } from 'lodash'

export const createBusiness = (opts: Options) => {
  return {
    sayHello,
    createAccount: partial(createAccount, opts),
    createSession: partial(createSession, opts),
  }
}

export type Business = ReturnType<typeof createBusiness>
