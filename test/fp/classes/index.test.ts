// test
import { callable, instanceOf } from '../../../src/fp/classes/index.js'
import * as classes from '../../../src/fp/classes/index.js'


describe('classes', () => {
  it('should export classes namespace', () => {
    expect(Object.entries(classes).length).toEqual(2)

    expect(classes.callable).toBeDefined()
    expect(classes.instanceOf).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(callable).toBeDefined()
    expect(instanceOf).toBeDefined()
  })
})
