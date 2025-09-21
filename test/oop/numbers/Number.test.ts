import { expectTypeOf } from 'vitest'

// test
import { Number } from '../../../src/oop/numbers/Number.js'


describe('oop/numbers/Number.ts', () => {
  describe('new()', () => {
    it('should be typed as self', () => {
      expectTypeOf<Number>(new Number(1))
    })

    it('should return self', () => {
      expect(new Number(1).valueOf()).toEqual(1)
    })
  })

  describe('isMultipleOf()', () => {
    it('should return true for 15 multiple of 5', () => {
      expect(new Number(15).isMultipleOf(5)).toEqual(true)
    })

    it('should return false for 16 multiple of 5', () => {
      expect(new Number(16).isMultipleOf(5)).toEqual(false)
    })
  })
})
