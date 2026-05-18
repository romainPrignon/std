// test
import { delay } from '../../../src/fp/promises/index.js'
import * as promises from '../../../src/fp/promises/index.js'


describe('promises', () => {
  it('should export promises namespace', () => {
    expect(Object.entries(promises).length).toEqual(1)

    expect(promises.delay).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(delay).toBeDefined()
  })
})
