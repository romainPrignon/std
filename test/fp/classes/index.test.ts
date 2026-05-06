import { describe, expect, it } from 'vitest'
import { callable, instanceOf } from '../../../src/fp/classes/index.js'
import * as classes from '../../../src/fp/classes/index.js'

describe('classes', () => {
  it('should export two functions when callable and instanceOf are defined', () => {
    // Arrange
    const expectedExportCount = 2

    // Act
    const exportCount = Object.entries(classes).length

    // Assert
    expect(exportCount).toEqual(expectedExportCount)
  })

  it('should export callable function from namespace', () => {
    // Act & Assert
    expect(classes.callable).toBeDefined()
  })

  it('should export instanceOf function from namespace', () => {
    // Act & Assert
    expect(classes.instanceOf).toBeDefined()
  })

  it('should export callable function as named export', () => {
    // Act & Assert
    expect(callable).toBeDefined()
  })

  it('should export instanceOf function as named export', () => {
    // Act & Assert
    expect(instanceOf).toBeDefined()
  })
})
