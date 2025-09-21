// test
import { isMultipleOf } from '../../../src/fp/numbers/number.js'


describe('fp/numbers/number.ts', () => {
  describe('isMultipleOf()', () => {
    it('should return true for 15 multiple of 5', () => {
      const isMultipleOf5 = isMultipleOf(5)

      expect(isMultipleOf(5, 15)).toEqual(true)
      expect(isMultipleOf5(15)).toEqual(true)
    })

    it('should return false for 16 multiple of 5', () => {
      const isMultipleOf5 = isMultipleOf(5)

      expect(isMultipleOf(5, 16)).toEqual(false)
      expect(isMultipleOf5(16)).toEqual(false)
    })
  })
})
