import { Options } from './types'
import { sayHello } from './domains/sayHello'

export const createBusiness = (opts: Options) => {
  return {
    sayHello,
  }
}

export type Business = ReturnType<typeof createBusiness>
