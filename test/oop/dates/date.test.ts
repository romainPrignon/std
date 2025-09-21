import { expectType } from 'tsd'

// test
import { date } from '../../../src/fp/dates/date.js'


describe('fp/dates/date.ts', () => {
  describe('date()', () => {
    it('should be typed as Date', () => {
      expectType<Date>(date(2020))
    })

    it('should return a Date', () => {
      expect(date(0)).toEqual(new Date(0))
    })
  })
})
