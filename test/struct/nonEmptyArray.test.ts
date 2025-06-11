import { expectType } from 'tsd'
import * as zod from 'zod'

// test
import * as struct from '../../src/struct/nonEmptyArray'


describe('nonEmptyArray.ts', () => {
  describe('NonEmptyArray()', () => {
    it('should be tagged correctly', () => {
      expectType<zod.ZodType<Array<number>>>(struct.NonEmptyArray(zod.number()))
    })

    it('should handle parse', () => {
      const nonEmptyArrayOfNumber = struct.NonEmptyArray(zod.number())
      const zodError = {
        code: zod.ZodIssueCode.custom,
        message: 'Expect Non Empty Array',
        fatal: true,
        path: []
      }

      expectType<Array<number>>(nonEmptyArrayOfNumber.parse([1]))
      expect(() => nonEmptyArrayOfNumber.parse([])).toThrow(new zod.ZodError([zodError]))
      expect(nonEmptyArrayOfNumber.parse([1])).toEqual([1])
    })


    it('should handle safeParse', async () => {
      const nonEmptyArrayOfNumber = struct.NonEmptyArray(zod.number())
      const zodError = {
        code: zod.ZodIssueCode.custom,
        message: 'Expect Non Empty Array',
        fatal: true,
        path: []
      }

      type SafeParseResult<T> = {
        success: false
        error: zod.ZodError
      } | {
        success: true
        data: Array<T>
      }

      expectType<SafeParseResult<number>>(nonEmptyArrayOfNumber.safeParse([1]))
      expect(nonEmptyArrayOfNumber.safeParse([])).toEqual({ success: false, error: new zod.ZodError([zodError]) })
      expect(nonEmptyArrayOfNumber.safeParse([1])).toEqual({ success: true, data: [1] })
    })
  })
})
