import { expectType } from 'tsd'
import { Exception, derive } from '../../../src/fp/errors'

// test
import { raise } from '../../../src/fp/functions/raise'


describe('fp/functions/raise.ts', () => {
  describe('raise()', () => {
    it('should be typed correctly', () => {
      const rootError = new Error()
      expectType<() => never>(() => raise(rootError)) // eslint-disable-line
    })

    it('should be typed correctly for Exception', () => {
      expectType<() => never>(() => raise(Exception('boom'))) // eslint-disable-line
    })

    it('should be typed correctly for CustomError', () => {
      const CustomError = derive(Exception, 'CustomError')
      expectType<() => never>(() => raise(CustomError('boom'))) // eslint-disable-line
    })

    it('should throw an Error', async () => {
      const error = new Error('boom')
      expect(() => raise(error)).toThrow(error)
    })

    it('should throw an Err', async () => {
      const error = Exception('boom')
      expect(() => raise(error)).toThrow(error)
    })

    it('should throw a CustomError', async () => {
      const CustomError = derive(Exception, 'CustomError')
      const error = CustomError('boom')
      expect(() => raise(error)).toThrow(error)
    })
  })
})
