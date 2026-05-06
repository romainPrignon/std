import { describe, expect, it } from 'vitest'
import * as objects from '../../../src/fp/objects/index.js'

describe('objects', () => {
  it('should export empty namespace when no functions defined', () => {
    // Arrange
    const expectedExportCount = 0

    // Act
    const exportCount = Object.entries(objects).length

    // Assert
    expect(exportCount).toEqual(expectedExportCount)
  })
})
