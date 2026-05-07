import { describe, expect, it, expectTypeOf } from 'vitest'
import { Err, inherit } from '../../../src/fp/errors/index.js'

// test
import { raise } from '../../../src/fp/functions/raise.js'

describe('fp/functions/raise.ts', () => {
  describe('raise()', () => {
    it('should be typed correctly', () => {
      // Arrange
      const rootError = new Error()

      // Assert
      expectTypeOf<() => never>(() => raise(rootError))
    })

    it('should be typed correctly for Err', () => {
      // Assert
      expectTypeOf<() => never>(() => raise(Err('boom')))
    })

    it('should be typed correctly for CustomError', () => {
      // Arrange
      const CustomError = inherit(Err, 'CustomError')

      // Assert
      expectTypeOf<() => never>(() => raise(CustomError('boom')))
    })

    it('should throw an Error', async () => {
      // Arrange
      const error = new Error('boom')

      // Act & Assert
      expect(() => raise(error)).toThrow(error)
    })

    it('should throw an Err', async () => {
      // Arrange
      const error = Err('boom')

      // Act & Assert
      expect(() => raise(error)).toThrow(error)
    })

    it('should throw a CustomError', async () => {
      // Arrange
      const CustomError = inherit(Err, 'CustomError')
      const error = CustomError('boom')

      // Act & Assert
      expect(() => raise(error)).toThrow(error)
    })
  })
})
