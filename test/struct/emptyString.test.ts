import { expectTypeOf } from 'vitest'
import * as zod from 'zod'

// test
import * as struct from '../../src/struct/emptyString.js'


describe('emptyString.ts', () => {
  describe('EmptyString()', () => {
    it('should be tagged correctly', () => {
      expectTypeOf<zod.ZodType<''>>(struct.EmptyString)
    })

    it('should handle parse', () => {
      expectTypeOf<''>(struct.EmptyString.parse(''))
      expect(() => struct.EmptyString.parse('a')).toThrowErrorMatchingInlineSnapshot(`
        [ZodError: [
          {
            "code": "custom",
            "path": [],
            "message": "Expect Empty String"
          }
        ]]
      `)
      expect(struct.EmptyString.parse('')).toEqual('')
    })


    it('should handle safeParse', async () => {
      type SafeParseResult = {
        success: false
        error: zod.ZodError
      } | {
        success: true
        data: ''
      }

      expectTypeOf<SafeParseResult>(struct.EmptyString.safeParse(''))
      expect(struct.EmptyString.safeParse('a')).toMatchInlineSnapshot(`
        {
          "error": [ZodError: [
          {
            "code": "custom",
            "path": [],
            "message": "Expect Empty String"
          }
        ]],
          "success": false,
        }
      `)
      expect(struct.EmptyString.safeParse('')).toEqual({ success: true, data: '' })
    })
  })
})
