import { describe, expect, it } from 'vitest'
import { from } from '../../../src/fp/asynciterable/index.js'
import * as asynciterable from '../../../src/fp/asynciterable/index.js'

describe('asynciterable', () => {
  it('should export one function when from is defined', () => {
    // Arrange
    const expectedExportCount = 1

    // Act
    const exportCount = Object.entries(asynciterable).length

    // Assert
    expect(exportCount).toEqual(expectedExportCount)
  })

  it('should export from function from namespace', () => {
    // Act & Assert
    expect(asynciterable.from).toBeDefined()
  })

  it('should export from function as named export', () => {
    // Act & Assert
    expect(from).toBeDefined()
  })
})
