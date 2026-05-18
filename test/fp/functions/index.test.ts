// test
import { may, mayAsync, maybe, memoize, raise } from '../../../src/fp/functions/index.js'
import * as functions from '../../../src/fp/functions/index.js'


describe('functions', () => {
  it('should export functions namespace', () => {
    expect(Object.entries(functions).length).toEqual(5)

    expect(functions.may).toBeDefined()
    expect(functions.mayAsync).toBeDefined()
    expect(functions.maybe).toBeDefined()
    expect(functions.memoize).toBeDefined()
    expect(functions.raise).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(may).toBeDefined()
    expect(mayAsync).toBeDefined()
    expect(maybe).toBeDefined()
    expect(memoize).toBeDefined()
    expect(raise).toBeDefined()
  })
})
