import { expectType } from 'tsd'
import * as zod from 'zod'

// test
import * as struct from '../../src/struct/emptyString.js'


describe('emptyString.ts', () => {
  describe('EmptyString()', () => {
    it('should be tagged correctly', () => {
      expectType<zod.ZodType<''>>(struct.EmptyString)
    })

    it('should handle parse', () => {
      const zodError = {
        code: zod.ZodIssueCode.custom,
        message: 'Expect Empty String',
        fatal: true,
        path: []
      }

      expectType<''>(struct.EmptyString.parse(''))
      expect(() => struct.EmptyString.parse('a')).toThrow(new zod.ZodError([zodError]))
      expect(struct.EmptyString.parse('')).toEqual('')
    })


    it('should handle safeParse', async () => {
      const zodError = {
        code: zod.ZodIssueCode.custom,
        message: 'Expect Empty String',
        fatal: true,
        path: []
      }

      type SafeParseResult = {
        success: false
        error: zod.ZodError
      } | {
        success: true
        data: ''
      }

      expectType<SafeParseResult>(struct.EmptyString.safeParse(''))
      expect(struct.EmptyString.safeParse('a')).toEqual({ success: false, error: new zod.ZodError([zodError]) })
      expect(struct.EmptyString.safeParse('')).toEqual({ success: true, data: '' })
    })
  })
})
