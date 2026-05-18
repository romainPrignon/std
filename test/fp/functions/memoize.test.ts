import { expectTypeOf } from 'vitest'

// test
import { memoize } from '../../../src/fp/functions/memoize.js'


describe('fp/functions/memoize.ts', () => {
  describe('memoize()', () => {
    it('should be typed correctly for simple function', () => {
      // Arrange
      const memoized = memoize(() => 1)

      // Act & Assert (type tests)
      expectTypeOf<(...args: Array<never>) => number>(memoized)
      const res = memoized()
      expectTypeOf<number>(res)
    })

    it('should be typed correctly for function returning parameter', () => {
      // Arrange
      const memoized = memoize((a: number) => a)

      // Act & Assert (type tests)
      expectTypeOf<(...args: Array<number>) => number>(memoized)
      const res = memoized(1)
      expectTypeOf<number>(res)
    })

    it('should be typed correctly for function with multiple params', () => {
      // Arrange
      const memoized = memoize((a: number, b: string) => a + b)

      // Act & Assert (type tests)
      expectTypeOf<(...args: [number, string]) => number | string>(memoized)
      const res = memoized(1, 'a')
      expectTypeOf<number | string>(res)
    })

    it('should cache results for same arguments', () => {
      // Arrange
      let callCount = 0
      const expensiveFunction = (a: number) => {
        callCount++
        return a * 2
      }
      const memoized = memoize(expensiveFunction)

      // Act
      const result1 = memoized(5)
      const result2 = memoized(5)

      // Assert
      expect(result1).toBe(10)
      expect(result2).toBe(10)
      expect(callCount).toBe(1) // Function should only be called once
    })

    it('should compute different results for different arguments', () => {
      // Arrange
      const add = (a: number, b: number) => a + b
      const memoizedAdd = memoize(add)

      // Act
      const result1 = memoizedAdd(1, 2)
      const result2 = memoizedAdd(3, 4)

      // Assert
      expect(result1).toBe(3)
      expect(result2).toBe(7)
    })

    it('should handle complex argument types', () => {
      // Arrange
      const concatArrays = (arr1: number[], arr2: number[]) => [...arr1, ...arr2]
      const memoizedConcat = memoize(concatArrays)

      // Act
      const result1 = memoizedConcat([1, 2], [3, 4])
      const result2 = memoizedConcat([1, 2], [3, 4])

      // Assert
      expect(result1).toEqual([1, 2, 3, 4])
      expect(result2).toEqual([1, 2, 3, 4])
      expect(result1).toBe(result2) // Should return the same cached reference
    })

    it('should handle functions with no arguments', () => {
      // Arrange
      let callCount = 0
      const noArgFunction = () => {
        callCount++
        return Math.random()
      }
      const memoized = memoize(noArgFunction)

      // Act
      const result1 = memoized()
      const result2 = memoized()

      // Assert
      expect(result1).toBe(result2) // Should return same cached value
      expect(callCount).toBe(1) // Function should only be called once
    })

    it('should handle functions with many arguments', () => {
      // Arrange
      const sumMany = (a: number, b: number, c: number, d: number, e: number) => a + b + c + d + e
      const memoizedSum = memoize(sumMany)

      // Act
      const result1 = memoizedSum(1, 2, 3, 4, 5)
      const result2 = memoizedSum(1, 2, 3, 4, 5)
      const result3 = memoizedSum(2, 3, 4, 5, 6)

      // Assert
      expect(result1).toBe(15)
      expect(result2).toBe(15)
      expect(result3).toBe(20)
    })
  })
})
