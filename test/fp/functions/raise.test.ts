import { expectType } from 'tsd'
import { Err, inherit } from '../../../src/fp/errors'

// test
import { raise } from '../../../src/fp/functions/raise'


describe('fp/functions/raise.ts', () => {
  describe('raise()', () => {
    it('should be typed correctly', () => {
      const rootError = new Error()
      expectType<() => never>(() => raise(rootError)) // eslint-disable-line
    })

    it('should be typed correctly for Err', () => {
      expectType<() => never>(() => raise(Err('boom'))) // eslint-disable-line
    })

    it('should be typed correctly for CustomError', () => {
      const CustomError = inherit(Err, 'CustomError')
      expectType<() => never>(() => raise(CustomError('boom'))) // eslint-disable-line
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
