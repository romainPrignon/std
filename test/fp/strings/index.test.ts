// test
import { concat } from '../../../src/fp/strings/index.js'
import * as strings from '../../../src/fp/strings/index.js'


describe('strings', () => {
  it('should export strings namespace', () => {
    // Arrange
    const expectedLength = 1

    // Act
    const entries = Object.entries(strings)

    // Assert
    expect(entries.length).toEqual(expectedLength)

    expect(strings.concat).toBeDefined()
  })

  it('should export all namespace', () => {
    // Assert
    expect(concat).toBeDefined()
  })
})
