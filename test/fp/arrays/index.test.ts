// test
// import {  } from '../../../src/fp/arrays'
import * as arrays from '../../../src/fp/arrays/index.js'


describe('arrays', () => {
  it('should export arrays namespace', () => {
    // Arrange
    const expectedLength = 0

    // Act
    const entries = Object.entries(arrays)

    // Assert
    expect(entries.length).toEqual(expectedLength)
  })
})
