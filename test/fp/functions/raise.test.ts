import { describe, expect, expectTypeOf, it } from 'vitest'
import { Err, inherit } from '../../../src/fp/errors/index.js'
import { raise } from '../../../src/fp/functions/raise.js'

describe('fp/functions/raise.ts', () => {
  describe('raise()', () => {
    it('should return never type when raising Error', () => {
      // Arrange
      const rootError = new Error()

      // Act & Assert
      expectTypeOf<() => never>(() => raise(rootError))
    })

    it('should return never type when raising Err', () => {
      // Act & Assert
      expectTypeOf<() => never>(() => raise(Err('boom')))
    })

    it('should return never type when raising CustomError', () => {
      // Arrange
      const CustomError = inherit(Err, 'CustomError')

      // Act & Assert
      expectTypeOf<() => never>(() => raise(CustomError('boom')))
    })

    it('should throw Error when raising base Error', () => {
      // Arrange
      const error = new Error('boom')

      // Act & Assert
      expect(() => raise(error)).toThrow(error)
    })

    it('should throw Err when raising Err instance', () => {
      // Arrange
      const error = Err('boom')

      // Act & Assert
      expect(() => raise(error)).toThrow(error)
    })

    it('should throw CustomError when raising custom error instance', () => {
      // Arrange
      const CustomError = inherit(Err, 'CustomError')
      const error = CustomError('boom')

      // Act & Assert
      expect(() => raise(error)).toThrow(error)
    })
  })
})
