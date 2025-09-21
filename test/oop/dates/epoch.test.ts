import { expectTypeOf } from 'vitest'

// test
import { epoch } from '../../../src/fp/dates/epoch.js'


describe('fp/dates/epoch.ts', () => {
  describe('epoch()', () => {
    it('should be typed as Date', () => {
      expectTypeOf<Date>(epoch())
    })

    it('should return epoch Date', () => {
      expect(epoch()).toEqual(new Date(0))
    })
  })
})
