import { expectType } from 'tsd'
import * as zod from 'zod'

// test
import * as struct from '../../src/struct/promise.js'


describe('struct/promise.ts', () => {
  describe('Promise()', () => {
    it('should be tagged correctly', async () => {
      expectType<zod.ZodType<Promise<number>>>(struct.Promise(zod.number()))
    })

    it('should handle parse', async () => {
      const numberPromise = struct.Promise(zod.number())
      const zodError = {
        code: zod.ZodIssueCode.custom,
        message: 'Expect Promise',
        fatal: true,
        path: []
      }

      expectType<Promise<number>>(numberPromise.parse(Promise.resolve(1)))
      expect(() => numberPromise.parse(1)).toThrow(new zod.ZodError([zodError]))
      expect(await numberPromise.parse(Promise.resolve(1))).toEqual(1)
    })

    it('should handle safeParse', async () => {
      const numberPromise = struct.Promise(zod.number())

      const zodError = {
        code: zod.ZodIssueCode.custom,
        message: 'Expect Promise',
        fatal: true,
        path: []
      }

      type SafeParseResult = {
        success: false
        error: zod.ZodError
      } | {
        success: true
        data: Promise<number>
      }

      expectType<SafeParseResult>(numberPromise.safeParse(Promise.resolve(1)))
      expect(numberPromise.safeParse(1)).toEqual({ success: false, error: new zod.ZodError([zodError]) })
      expect(numberPromise.safeParse(Promise.resolve(1))).toEqual({ success: true, data: Promise.resolve(1) })
    })
  })
})
