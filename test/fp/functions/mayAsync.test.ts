import { expectType } from 'tsd'
import { Err } from '../../../src/fp/errors/Error.js'

// test
import { mayAsync } from '../../../src/fp/functions/mayAsync.js'


describe('fp/functions/mayAsync.ts', () => {
  describe('mayAsync()', () => {
    it('should be typed as R1 | Err', () => {
      expectType<Promise<number | typeof Err>>(mayAsync(async () => 1))
    })
    it('should be typed as R1 | R2', () => {
      expectType<Promise<number | string>>(mayAsync(async () => 1, () => 'a'))
    })

    it('should return an Err if failure callback not provided', async () => {
      const err = Err('boom', { code: 'BOOM' })

      const output = await mayAsync(async () => { throw err })

      expect(output).toEqual(err)
    })

    it('should return correctly in success case', async () => {
      const output = await mayAsync(async () => 1)

      expect(output).toEqual(1)
    })

    it('should return fallback in failure case', async () => {
      const err = Err('boom', { code: 'BOOM' })

      const output = await mayAsync(
        async () => { throw err },
        () => 2
      )

      expect(output).toEqual(2)
    })
  })
})
