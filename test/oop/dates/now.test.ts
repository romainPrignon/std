import { expectTypeOf, vi } from 'vitest'

// test
import { now } from '../../../src/fp/dates/now.js'


describe('fp/dates/now.ts', () => {
  describe('now()', () => {
    it('should be typed as Date', () => {
      expectTypeOf<Date>(now())
    })

    it('should return current Date', () => {
      // Mock
      vi.spyOn(Date, 'now').mockImplementation(() => 0)

      expect(now()).toEqual(new Date(0))
    })
  })
})
