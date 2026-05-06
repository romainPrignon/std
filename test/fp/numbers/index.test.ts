import { describe, expect, it } from 'vitest'
import { isMultipleOf } from '../../../src/fp/numbers/index.js'
import * as numbers from '../../../src/fp/numbers/index.js'

describe('numbers', () => {
  it('should export one function when isMultipleOf is defined', () => {
    // Arrange
    const expectedExportCount = 1

    // Act
    const exportCount = Object.entries(numbers).length

    // Assert
    expect(exportCount).toEqual(expectedExportCount)
  })

  it('should export isMultipleOf function from namespace', () => {
    // Act & Assert
    expect(numbers.isMultipleOf).toBeDefined()
  })

  it('should export isMultipleOf function as named export', () => {
    // Act & Assert
    expect(isMultipleOf).toBeDefined()
  })
})
