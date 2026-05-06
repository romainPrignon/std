// test
import { from } from '../../../src/fp/asynciterable/index.js'
import * as asynciterable from '../../../src/fp/asynciterable/index.js'


describe('asynciterable', () => {
  it('should export asynciterable namespace', () => {
    // Arrange
    const expectedLength = 1

    // Act
    const entries = Object.entries(asynciterable)

    // Assert
    expect(entries.length).toEqual(expectedLength)

    expect(asynciterable.from).toBeDefined()
  })

  it('should export all namespace', () => {
    // Assert
    expect(from).toBeDefined()
  })
})
