// test
import { imut, mut } from '../../../src/fp/data/index.js'
import * as data from '../../../src/fp/data/index.js'


describe('data', () => {
  it('should export data namespace', () => {
    // Arrange
    const expectedLength = 2

    // Act
    const entries = Object.entries(data)

    // Assert
    expect(entries.length).toEqual(expectedLength)

    expect(data.imut).toBeDefined()
    expect(data.mut).toBeDefined()
  })

  it('should export all namespace', () => {
    // Assert
    expect(imut).toBeDefined()
    expect(mut).toBeDefined()
  })
})
