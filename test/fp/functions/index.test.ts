import { describe, expect, it } from 'vitest'
import { may, mayAsync, maybe, raise } from '../../../src/fp/functions/index.js'
import * as functions from '../../../src/fp/functions/index.js'

describe('functions', () => {
  it('should export four functions when may, mayAsync, maybe and raise are defined', () => {
    // Arrange
    const expectedExportCount = 4

    // Act
    const exportCount = Object.entries(functions).length

    // Assert
    expect(exportCount).toEqual(expectedExportCount)
  })

  it('should export may function from namespace', () => {
    // Act & Assert
    expect(functions.may).toBeDefined()
  })

  it('should export mayAsync function from namespace', () => {
    // Act & Assert
    expect(functions.mayAsync).toBeDefined()
  })

  it('should export maybe function from namespace', () => {
    // Act & Assert
    expect(functions.maybe).toBeDefined()
  })

  it('should export raise function from namespace', () => {
    // Act & Assert
    expect(functions.raise).toBeDefined()
  })

  it('should export may function as named export', () => {
    // Act & Assert
    expect(may).toBeDefined()
  })

  it('should export mayAsync function as named export', () => {
    // Act & Assert
    expect(mayAsync).toBeDefined()
  })

  it('should export maybe function as named export', () => {
    // Act & Assert
    expect(maybe).toBeDefined()
  })

  it('should export raise function as named export', () => {
    // Act & Assert
    expect(raise).toBeDefined()
  })
})
