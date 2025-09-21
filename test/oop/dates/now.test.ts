import { expectType } from 'tsd'

// test
import { now } from '../../../src/fp/dates/now.js'


describe('fp/dates/now.ts', () => {
  describe('now()', () => {
    it('should be typed as Date', () => {
      expectType<Date>(now())
    })

    it('should return current Date', () => {
      // Mock
      jest.spyOn(Date, 'now').mockImplementation(() => 0)

      expect(now()).toEqual(new Date(0))
    })
  })
})
