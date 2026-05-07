// test
import * as objects from '../../../src/fp/objects/index.js'


describe('objects', () => {
  it('should export objects namespace', () => {
    // Arrange
    const expectedLength = 0

    // Act
    const entries = Object.entries(objects)

    // Assert
    expect(entries.length).toEqual(expectedLength)
  })
})
