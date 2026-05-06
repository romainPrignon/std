import { describe, expect, it } from 'vitest'
import { imut, mut } from '../../../src/fp/data/index.js'
import * as data from '../../../src/fp/data/index.js'

describe('data', () => {
  it('should export two functions when imut and mut are defined', () => {
    // Arrange
    const expectedExportCount = 2

    // Act
    const exportCount = Object.entries(data).length

    // Assert
    expect(exportCount).toEqual(expectedExportCount)
  })

  it('should export imut function from namespace', () => {
    // Act & Assert
    expect(data.imut).toBeDefined()
  })

  it('should export mut function from namespace', () => {
    // Act & Assert
    expect(data.mut).toBeDefined()
  })

  it('should export imut function as named export', () => {
    // Act & Assert
    expect(imut).toBeDefined()
  })

  it('should export mut function as named export', () => {
    // Act & Assert
    expect(mut).toBeDefined()
  })
})
