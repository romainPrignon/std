import { Maybe } from '../../../src/type'

import { expectType } from 'tsd'

// test
import { maybe } from '../../../src/oop/functions/maybe'


describe('oopnctions/maybe.ts', () => {
  describe('maybe()', () => {
    it('should be typed correctly for simple function', () => {
      const opt = maybe(() => 1)
      expectType<(...args: Array<never>) => Maybe<number>>(opt)

      const res = opt()
      expectType<Maybe<number>>(res)
    })

    it('should be typed correctly for function returning undefined', () => {
      const opt = maybe(() => undefined)
      expectType<(...args: Array<never>) => Maybe<undefined>>(opt)

      const res = opt()
      expectType<Maybe<number>>(res)
    })

    it('should be typed correctly for function returning parameter', () => {
      const opt = maybe((a) => a)
      expectType<(...args: Array<unknown>) => Maybe<unknown>>(opt)

      const res = opt(1)
      expectType<Maybe<unknown>>(res)
    })

    it('should be typed correctly for function with typed params', () => {
      const opt = maybe((a: number) => a)
      expectType<(...args: Array<number>) => Maybe<number>>(opt)

      const res = opt(1)
      expectType<Maybe<number>>(res)
    })

    it('should be typed correctly for function with multiple params', () => {
      const opt = maybe((a: number, b: string) => a + b)
      expectType<(...args: [number, string]) => Maybe<number | string>>(opt)

      const res = opt(1, 'a')
      expectType<Maybe<number | string>>(res)
    })

    it('should make result maybe', () => {
      const opt = maybe(() => 1)

      expect(opt()).toEqual(1)
    })

    it('should not change undefined result', () => {
      const opt = maybe(() => undefined)

      expect(opt()).toEqual(undefined)
    })

    it('should not change input', () => {
      const opt = maybe((a) => a)

      expect(opt(1)).toEqual(1)
    })

    it('should not change inputs', () => {
      const opt = maybe((a: number, b: number) => a + b)

      expect(opt(1, 1)).toEqual(2)
    })
  })
})
