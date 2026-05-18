// test
import { maybe, memoize } from '../../../src/oop/functions/index.js'
import * as functions from '../../../src/oop/functions/index.js'


describe('functions', () => {
  it('should export functions namespace', () => {
    expect(Object.entries(functions).length).toEqual(2)

    expect(functions.maybe).toBeDefined()
    expect(functions.memoize).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(maybe).toBeDefined()
    expect(memoize).toBeDefined()
  })
})
