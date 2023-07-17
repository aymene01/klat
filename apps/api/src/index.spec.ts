import { expect, describe, it } from 'vitest'

const sum = (a: number, b: number): number => a + b

describe('Succes case', () => {
  it('Should return 3', () => {
    const res = sum(1, 2)

    expect(res).toBe(3)
  })
})
