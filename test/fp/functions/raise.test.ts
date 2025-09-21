import { expectTypeOf } from 'vitest'
import { Err, inherit } from '../../../src/fp/errors/index.js'

// test
import { raise } from '../../../src/fp/functions/raise.js'


describe('fp/functions/raise.ts', () => {
  describe('raise()', () => {
    it('should be typed correctly', () => {
      const rootError = new Error()
      expectTypeOf<() => never>(() => raise(rootError))
    })

    it('should be typed correctly for Err', () => {
      expectTypeOf<() => never>(() => raise(Err('boom')))
    })

    it('should be typed correctly for CustomError', () => {
      const CustomError = inherit(Err, 'CustomError')
      expectTypeOf<() => never>(() => raise(CustomError('boom')))
    })

    it('should throw an Error', async () => {
      const error = new Error('boom')
      expect(() => raise(error)).toThrow(error)
    })

    it('should throw an Err', async () => {
      const error = Err('boom')
      expect(() => raise(error)).toThrow(error)
    })

    it('should throw a CustomError', async () => {
      const CustomError = inherit(Err, 'CustomError')
      const error = CustomError('boom')
      expect(() => raise(error)).toThrow(error)
    })
  })
})
