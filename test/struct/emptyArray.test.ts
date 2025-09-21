import { expectType } from 'tsd'
import * as zod from 'zod'

// test
import * as struct from '../../src/struct/emptyArray.js'


describe('emptyArray.ts', () => {
  describe('EmptyArray()', () => {
    it('should be tagged correctly', () => {
      expectType<zod.ZodType<Array<never>>>(struct.EmptyArray)
    })

    it('should handle parse', () => {
      const zodError = {
        code: zod.ZodIssueCode.custom,
        message: 'Expect Empty Array',
        fatal: true,
        path: []
      }

      expectType<Array<never>>(struct.EmptyArray.parse([]))
      expect(() => struct.EmptyArray.parse(['a'])).toThrow(new zod.ZodError([zodError]))
      expect(struct.EmptyArray.parse([])).toEqual([])
    })


    it('should handle safeParse', async () => {
      const zodError = {
        code: zod.ZodIssueCode.custom,
        message: 'Expect Empty Array',
        fatal: true,
        path: []
      }

      type SafeParseResult = {
        success: false
        error: zod.ZodError
      } | {
        success: true
        data: Array<never>
      }

      expectType<SafeParseResult>(struct.EmptyArray.safeParse([]))
      expect(struct.EmptyArray.safeParse([1])).toEqual({ success: false, error: new zod.ZodError([zodError]) })
      expect(struct.EmptyArray.safeParse([])).toEqual({ success: true, data: [] })
    })
  })
})
