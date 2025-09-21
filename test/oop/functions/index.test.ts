// test
import { maybe } from '../../../src/oop/functions/index.js'
import * as functions from '../../../src/oop/functions/index.js'


describe('functions', () => {
  it('should export functions namespace', () => {
    expect(Object.entries(functions).length).toEqual(1)

    expect(functions.maybe).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(maybe).toBeDefined()
  })
})
