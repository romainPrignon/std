import { expectTypeOf } from 'vitest'
import { Err } from '../../../src/fp/errors/Error.js'

// test
import { may } from '../../../src/fp/functions/may.js'


describe('fp/functions/may.ts', () => {
  describe('may()', () => {
    it('should be typed as R1', () => {
      // Act
      const result = may(() => 1)

      // Assert
      expectTypeOf<number | any>(result)
    })

    it('should be typed as R1 | R2', () => {
      // Act
      const result = may(() => 1, () => 'a')

      // Assert
      expectTypeOf<number | string>(result)
    })

    it('should return an Err if failure callback not provided', () => {
      // Arrange
      const err = Err('boom', { code: 'BOOM' })

      // Act
      const result = may(() => { throw err })

      // Assert
      expect(result).toEqual(err)
    })

    it('should return correctly in success case', () => {
      // Act
      const result = may(() => 1)

      // Assert
      expect(result).toEqual(1)
    })

    it('should return fallback in failure case', () => {
      // Arrange
      const err = Err('boom', { code: 'BOOM' })

      // Act
      const result = may(
        () => { throw err },
        () => 2
      )

      // Assert
      expect(result).toEqual(2)
    })
  })
})
