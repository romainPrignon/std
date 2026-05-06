import { describe, expect, it } from 'vitest'
import { date, epoch, now } from '../../../src/fp/dates/index.js'
import * as dates from '../../../src/fp/dates/index.js'

describe('dates', () => {
  it('should export three functions when date, epoch and now are defined', () => {
    // Arrange
    const expectedExportCount = 3

    // Act
    const exportCount = Object.entries(dates).length

    // Assert
    expect(exportCount).toEqual(expectedExportCount)
  })

  it('should export date function from namespace', () => {
    // Act & Assert
    expect(dates.date).toBeDefined()
  })

  it('should export epoch function from namespace', () => {
    // Act & Assert
    expect(dates.epoch).toBeDefined()
  })

  it('should export now function from namespace', () => {
    // Act & Assert
    expect(dates.now).toBeDefined()
  })

  it('should export date function as named export', () => {
    // Act & Assert
    expect(date).toBeDefined()
  })

  it('should export epoch function as named export', () => {
    // Act & Assert
    expect(epoch).toBeDefined()
  })

  it('should export now function as named export', () => {
    // Act & Assert
    expect(now).toBeDefined()
  })
})
