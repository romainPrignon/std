// test
import { callable, instanceOf } from '../../../src/fp/classes/index.js'
import * as classes from '../../../src/fp/classes/index.js'


describe('classes', () => {
  it('should export classes namespace', () => {
    // Arrange
    const expectedLength = 2

    // Act
    const entries = Object.entries(classes)

    // Assert
    expect(entries.length).toEqual(expectedLength)

    expect(classes.callable).toBeDefined()
    expect(classes.instanceOf).toBeDefined()
  })

  it('should export all namespace', () => {
    // Assert
    expect(callable).toBeDefined()
    expect(instanceOf).toBeDefined()
  })
})
