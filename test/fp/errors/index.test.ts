// test
import { Err } from '../../../src/fp/errors/index.js'
import * as errors from '../../../src/fp/errors/index.js'


describe('errors', () => {
  it('should export errors namespace', () => {
    expect(Object.entries(errors).length).toEqual(2)

    expect(errors.Err).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(Err).toBeDefined()
  })
})
