import { describe, expect, it } from 'vitest'
import { pipe } from '../../../src/fp/functions/pipe.js'

describe('fp/functions/pipe.ts', () => {
  describe('pipe()', () => {
    it('should pipe a value through a series of functions', () => {
      // Arrange
      const addOne = (x: number) => x + 1
      const multiplyByTwo = (x: number) => x * 2
      const subtractThree = (x: number) => x - 3

      // Act
      const pipedFunction = pipe(addOne, multiplyByTwo, subtractThree)
      const result = pipedFunction(5)

      // Assert
      expect(result).toBe(9)
    })

    it('should return the input value when no functions are provided', () => {
      // Arrange
      const inputValue = 42

      // Act
      const pipedFunction = pipe()
      const result = pipedFunction(inputValue)

      // Assert
      expect(result).toBe(inputValue)
    })

    it('should handle a single function correctly', () => {
      // Arrange
      const double = (x: number) => x * 2
      const inputValue = 5

      // Act
      const pipedFunction = pipe(double)
      const result = pipedFunction(inputValue)

      // Assert
      expect(result).toBe(10)
    })

    it('should handle string transformations', () => {
      // Arrange
      const toUpperCase = (s: string) => s.toUpperCase()
      const addSuffix = (s: string) => `${s}z`
      const inputValue = 'hello'

      // Act
      const pipedFunction = pipe(toUpperCase, addSuffix)
      const result = pipedFunction(inputValue)

      // Assert
      expect(result).toBe('HELLOz')
    })

    it('should handle object transformations', () => {
      // Arrange
      const addName = (obj: { age: number }) => ({ ...obj, name: 'Alice' })
      const incrementAge = (obj: { name: string; age: number }) => ({ ...obj, age: obj.age + 1 })
      const inputValue = { age: 30 }

      // Act
      const pipedFunction = pipe(addName, incrementAge)
      const result = pipedFunction(inputValue)

      // Assert
      expect(result).toEqual({ name: 'Alice', age: 31 })
    })
  })
})
