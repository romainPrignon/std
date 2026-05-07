// test
import { from } from '../../../src/fp/iterable/index.js'
import * as iterable from '../../../src/fp/iterable/index.js'


describe('iterable', () => {
  it('should export iterable namespace', () => {
    // Arrange
    const expectedLength = 1

    // Act
    const entries = Object.entries(iterable)

    // Assert
    expect(entries.length).toEqual(expectedLength)

    expect(iterable.from).toBeDefined()
  })

  it('should export all namespace', () => {
    // Assert
    expect(from).toBeDefined()
  })
})
