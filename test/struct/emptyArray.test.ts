import { expectTypeOf } from 'vitest'
import * as zod from 'zod'

// test
import * as struct from '../../src/struct/emptyArray.js'


describe('emptyArray.ts', () => {
  describe('EmptyArray()', () => {
    it('should be tagged correctly', () => {
      expectTypeOf<zod.ZodType<Array<never>>>(struct.EmptyArray)
    })

    it('should handle parse', () => {
      expectTypeOf<Array<never>>(struct.EmptyArray.parse([]))
      expect(() => struct.EmptyArray.parse(['a'])).toThrowErrorMatchingInlineSnapshot(`
        [ZodError: [
          {
            "code": "custom",
            "path": [],
            "message": "Expect Empty Array"
          }
        ]]
      `)
      expect(struct.EmptyArray.parse([])).toEqual([])
    })


    it('should handle safeParse', async () => {
      type SafeParseResult = {
        success: false
        error: zod.ZodError
      } | {
        success: true
        data: Array<never>
      }

      expectTypeOf<SafeParseResult>(struct.EmptyArray.safeParse([]))
      expect(struct.EmptyArray.safeParse([1])).toMatchInlineSnapshot(`
        {
          "error": [ZodError: [
          {
            "code": "custom",
            "path": [],
            "message": "Expect Empty Array"
          }
        ]],
          "success": false,
        }
      `)
      expect(struct.EmptyArray.safeParse([])).toEqual({ success: true, data: [] })
    })
  })
})
