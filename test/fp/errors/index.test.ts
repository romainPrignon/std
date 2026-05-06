import { describe, expect, it } from 'vitest'
import { Err } from '../../../src/fp/errors/index.js'
import * as errors from '../../../src/fp/errors/index.js'

describe('errors', () => {
  it('should export two exports when Err is defined', () => {
    // Arrange
    const expectedExportCount = 2

    // Act
    const exportCount = Object.entries(errors).length

    // Assert
    expect(exportCount).toEqual(expectedExportCount)
  })

  it('should export Err from namespace', () => {
    // Act & Assert
    expect(errors.Err).toBeDefined()
  })

  it('should export Err as named export', () => {
    // Act & Assert
    expect(Err).toBeDefined()
  })
})
