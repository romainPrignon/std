import { describe, expect, it } from 'vitest'
import { concat } from '../../../src/fp/strings/index.js'
import * as strings from '../../../src/fp/strings/index.js'

describe('strings', () => {
  it('should export one function when concat is defined', () => {
    // Arrange
    const expectedExportCount = 1

    // Act
    const exportCount = Object.entries(strings).length

    // Assert
    expect(exportCount).toEqual(expectedExportCount)
  })

  it('should export concat function from namespace', () => {
    // Act & Assert
    expect(strings.concat).toBeDefined()
  })

  it('should export concat function as named export', () => {
    // Act & Assert
    expect(concat).toBeDefined()
  })
})
