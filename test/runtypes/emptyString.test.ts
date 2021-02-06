import { expectType } from 'tsd'
import * as r from 'runtypes'

// test
import { EmptyString } from '../../src/runtypes/emptyString'


describe('emptyString.ts', () => {
  describe('EmptyString()', () => {
    it('should be tagged correctly', () => {
      expectType<r.Runtype>(EmptyString)
      expect(EmptyString.name).toEqual('EmptyString')
      expect(EmptyString.tag).toEqual('EmptyString')
    })

    it('should handle check', () => {
      expect(() => EmptyString.check('a')).toThrow(new r.ValidationError('Failed constraint check'))
      expect(EmptyString.check('')).toEqual('')
    })

    it('should handle guard', () => {
      expectType<boolean>(EmptyString.guard(undefined))
      expect(EmptyString.guard('a')).toEqual(false)
      expect(EmptyString.guard('')).toEqual(true)
    })

    it('should handle validate', () => {
      expectType<r.Result<string>>(EmptyString.validate('a'))
      expect(EmptyString.validate('a')).toEqual({ 'message': 'Failed constraint check', 'success': false })
      expect(EmptyString.validate('')).toEqual({ 'success': true, 'value': '' })
    })
  })
})
