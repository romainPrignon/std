import { expectTypeOf } from 'vitest'

// test
import { mut } from '../../../src/fp/data/mut.js'
import { imut } from '../../../src/fp/data/index.js'


describe('fp/data/mut.ts', () => {
  describe('imut()', () => {
    it('should be typed correctly', () => {
      // Arrange
      const array = [1]
      const object = { a: 'b' }
      type ImmutableObject = {readonly a: string}

      // Assert
      expectTypeOf<ReadonlyArray<number>>(imut(mut(array)))
      expectTypeOf<ImmutableObject>(imut(mut(object)))
    })

    it('should return immutable value', () => {
      // Arrange
      const array = [1]
      const object = { a: 'b' }

      // Act
      const _res1 = imut(mut(array))
      const _res2 = imut(mut(object))

      // Assert
      // _res1.push(2) // NOK
      // _res2.a = 'c' // NOK
    })
  })
})
