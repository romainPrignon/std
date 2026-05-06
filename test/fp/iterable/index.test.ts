import { describe, expect, it } from 'vitest'
import { from } from '../../../src/fp/iterable/index.js'
import * as iterable from '../../../src/fp/iterable/index.js'

describe('iterable', () => {
  it('should export one function when from is defined', () => {
    // Arrange
    const expectedExportCount = 1

    // Act
    const exportCount = Object.entries(iterable).length

    // Assert
    expect(exportCount).toEqual(expectedExportCount)
  })

  it('should export from function from namespace', () => {
    // Act & Assert
    expect(iterable.from).toBeDefined()
  })

  it('should export from function as named export', () => {
    // Act & Assert
    expect(from).toBeDefined()
  })
})
