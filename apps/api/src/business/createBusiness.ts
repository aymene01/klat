import { Options } from './types'
import { sayHello } from './domains/sayHello'
import { createAccount } from './domains/auth'
import { partial } from 'lodash'

export const createBusiness = (opts: Options) => {
  return {
    sayHello,
    createAccount: partial(createAccount, opts),
  }
}

export type Business = ReturnType<typeof createBusiness>
