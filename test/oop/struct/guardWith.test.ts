import { expectType } from 'tsd'
import * as z from 'zod'

// test
import { guardWith } from '../../../src/oop/struct/guardWith.js'


describe('oop/struct/guardWith.ts', () => {
  describe('guardWith()', () => {
    it('should be typed correctly', () => {
      const numberSchema = z.number()
      const numberGuard = guardWith(numberSchema)

      expectType<(input: unknown) => boolean>(numberGuard)
    })
    it('should be typed correctly when calling guard', () => {
      const numberSchema = z.number()
      const input = {}

      const numberGuard = guardWith(numberSchema)

      expectType<boolean>(numberGuard(input))
    })

    it('should return false if input is not a number', () => {
      const numberSchema = z.number()
      const input = {}

      const numberGuard = guardWith(numberSchema)

      expect(numberGuard(input)).toEqual(false)
    })

    it('should return true if input is a number', () => {
      const numberSchema = z.number()
      const input = 1

      const numberGuard = guardWith(numberSchema)

      expect(numberGuard(input)).toEqual(true)
    })
  })
})
