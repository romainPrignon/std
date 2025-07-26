// test
import { Exception } from '../../../src/fp/errors'
import * as errors from '../../../src/fp/errors'


describe('errors', () => {
  it('should export errors namespace', () => {
    expect(Object.entries(errors).length).toEqual(2)

    expect(errors.Exception).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(Exception).toBeDefined()
  })
})
