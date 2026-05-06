import { expectTypeOf } from 'vitest'

// test
import { mut } from '../../../src/fp/data/mut.js'
import { imut } from '../../../src/fp/data/index.js'


describe('fp/data/mut.ts', () => {
  describe('mut()', () => {
    it('should be typed correctly', () => {
      // Arrange
      const array = [1]
      const object = { a: 'b' }

      // Assert
      expectTypeOf<typeof array>(mut(imut(array)))
      expectTypeOf<typeof object>(mut(imut(object)))
    })

    it('should return mutable value', () => {
      // Arrange
      const array = [1]
      const object = { a: 'b' }

      // Act
      const _res1 = mut(imut(array))
      const _res2 = mut(imut(object))

      // Assert
      // _res1.push(2) // OK
      // _res2.a = 'c' // OK
    })
  })
})
