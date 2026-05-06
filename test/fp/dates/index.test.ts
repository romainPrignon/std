// test
import { date, epoch, now } from '../../../src/fp/dates/index.js'
import * as dates from '../../../src/fp/dates/index.js'


describe('dates', () => {
  it('should export dates namespace', () => {
    // Arrange
    const expectedLength = 3

    // Act
    const entries = Object.entries(dates)

    // Assert
    expect(entries.length).toEqual(expectedLength)

    expect(dates.date).toBeDefined()
    expect(dates.epoch).toBeDefined()
    expect(dates.now).toBeDefined()
  })

  it('should export all namespace', () => {
    // Assert
    expect(date).toBeDefined()
    expect(epoch).toBeDefined()
    expect(now).toBeDefined()
  })
})
