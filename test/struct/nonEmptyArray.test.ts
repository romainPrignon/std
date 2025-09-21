import { expectTypeOf } from 'vitest'
import * as zod from 'zod'

// test
import * as struct from '../../src/struct/nonEmptyArray.js'


describe('nonEmptyArray.ts', () => {
  describe('NonEmptyArray()', () => {
    it('should be tagged correctly', () => {
      expectTypeOf<zod.ZodType<Array<number>>>(struct.NonEmptyArray(zod.number()))
    })

    it('should handle parse', () => {
      const nonEmptyArrayOfNumber = struct.NonEmptyArray(zod.number())

      expectTypeOf<Array<number>>(nonEmptyArrayOfNumber.parse([1]))
      expect(() => nonEmptyArrayOfNumber.parse([])).toThrowErrorMatchingInlineSnapshot(`
        [ZodError: [
          {
            "code": "custom",
            "path": [],
            "message": "Expect Non Empty Array"
          }
        ]]
      `)
      expect(nonEmptyArrayOfNumber.parse([1])).toEqual([1])
    })


    it('should handle safeParse', async () => {
      const nonEmptyArrayOfNumber = struct.NonEmptyArray(zod.number())

      type SafeParseResult<T> = {
        success: false
        error: zod.ZodError
      } | {
        success: true
        data: Array<T>
      }

      expectTypeOf<SafeParseResult<number>>(nonEmptyArrayOfNumber.safeParse([1]))
      expect(nonEmptyArrayOfNumber.safeParse([])).toMatchInlineSnapshot(`
        {
          "error": [ZodError: [
          {
            "code": "custom",
            "path": [],
            "message": "Expect Non Empty Array"
          }
        ]],
          "success": false,
        }
      `)
      expect(nonEmptyArrayOfNumber.safeParse([1])).toEqual({ success: true, data: [1] })
    })
  })
})
