import { expectTypeOf } from 'vitest'
import * as zod from 'zod'

// test
import * as struct from '../../src/struct/promise.js'


describe('struct/promise.ts', () => {
  describe('Promise()', () => {
    it('should be tagged correctly', async () => {
      expectTypeOf<zod.ZodType<Promise<number>>>(struct.Promise(zod.number()))
    })

    it('should handle parse', async () => {
      const numberPromise = struct.Promise(zod.number())

      expectTypeOf<Promise<number>>(numberPromise.parse(Promise.resolve(1)))
      expect(() => numberPromise.parse(1)).toThrowErrorMatchingInlineSnapshot(`
        [ZodError: [
          {
            "code": "custom",
            "path": [],
            "message": "Expect Promise"
          }
        ]]
      `)
      expect(await numberPromise.parse(Promise.resolve(1))).toEqual(1)
    })

    it('should handle safeParse', async () => {
      const numberPromise = struct.Promise(zod.number())

      type SafeParseResult = {
        success: false
        error: zod.ZodError
      } | {
        success: true
        data: Promise<number>
      }

      expectTypeOf<SafeParseResult>(numberPromise.safeParse(Promise.resolve(1)))
      expect(numberPromise.safeParse(1)).toMatchInlineSnapshot(`
        {
          "error": [ZodError: [
          {
            "code": "custom",
            "path": [],
            "message": "Expect Promise"
          }
        ]],
          "success": false,
        }
      `)
      expect(numberPromise.safeParse(Promise.resolve(1))).toEqual({ success: true, data: Promise.resolve(1) })
    })
  })
})
