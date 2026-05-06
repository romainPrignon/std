import { describe, expect, it } from 'vitest'
import * as arrays from '../../../src/fp/arrays/index.js'

describe('arrays', () => {
  it('should export empty namespace when no functions defined', () => {
    // Arrange
    const expectedExportCount = 0

    // Act
    const exportCount = Object.entries(arrays).length

    // Assert
    expect(exportCount).toEqual(expectedExportCount)
  })
})
