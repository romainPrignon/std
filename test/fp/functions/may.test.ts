import { expectType } from 'tsd'
import { Exception } from '../../../src/fp/errors/Error'

// test
import { may } from '../../../src/fp/functions/may'


describe('fp/functions/may.ts', () => {
  describe('may()', () => {
    it('should be typed as R1', () => {
      expectType<number>(may(() => 1))
    })
    it('should be typed as R1 | R2', () => {
      expectType<number | string>(may(() => 1, () => 'a'))
    })

    it('should return an Err if failure callback not provided', () => {
      const err = Exception('boom')

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
      const err = Exception('boom')

      expect(
        may(
          () => { throw err },
          () => 2
        )
      ).toEqual(2)
    })
  })
})
