// test
import { isMultipleOf } from '../../../src/fp/numbers/index.js'
import * as numbers from '../../../src/fp/numbers/index.js'


describe('numbers', () => {
  it('should export numbers namespace', () => {
    // Arrange
    const expectedLength = 1

    // Act
    const entries = Object.entries(numbers)

    // Assert
    expect(entries.length).toEqual(expectedLength)

    expect(numbers.isMultipleOf).toBeDefined()
  })

  it('should export all namespace', () => {
    // Assert
    expect(isMultipleOf).toBeDefined()
  })
})
