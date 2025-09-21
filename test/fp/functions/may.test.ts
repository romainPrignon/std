import { expectTypeOf } from 'vitest'
import { Err } from '../../../src/fp/errors/Error.js'

// test
import { may } from '../../../src/fp/functions/may.js'


describe('fp/functions/may.ts', () => {
  describe('may()', () => {
    it('should be typed as R1', () => {
      expectTypeOf<number>(may(() => 1))
    })
    it('should be typed as R1 | R2', () => {
      expectTypeOf<number | string>(may(() => 1, () => 'a'))
    })

    it('should return an Err if failure callback not provided', () => {
      const err = Err('boom', { code: 'BOOM' })

      expect(
        may(() => { throw err })
      ).toEqual(err)
    })

    it('should return correctly in success case', () => {
      expect(
        may(() => 1)
      ).toEqual(1)
    })

    it('should return fallback in failure case', () => {
      const err = Err('boom', { code: 'BOOM' })

      expect(
        may(
          () => { throw err },
          () => 2
        )
      ).toEqual(2)
    })
  })
})
