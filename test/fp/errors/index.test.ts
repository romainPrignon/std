// test
import { Err } from '../../../src/fp/errors/index.js'
import * as errors from '../../../src/fp/errors/index.js'


describe('errors', () => {
  it('should export errors namespace', () => {
    // Arrange
    const expectedLength = 2

    // Act
    const entries = Object.entries(errors)

    // Assert
    expect(entries.length).toEqual(expectedLength)

    expect(errors.Err).toBeDefined()
  })

  it('should export all namespace', () => {
    // Assert
    expect(Err).toBeDefined()
  })
})
