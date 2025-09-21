// test
import { date, epoch, now } from '../../../src/fp/dates/index.js'
import * as dates from '../../../src/fp/dates/index.js'


describe('dates', () => {
  it('should export dates namespace', () => {
    expect(Object.entries(dates).length).toEqual(3)

    expect(dates.date).toBeDefined()
    expect(dates.epoch).toBeDefined()
    expect(dates.now).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(date).toBeDefined()
    expect(epoch).toBeDefined()
    expect(now).toBeDefined()
  })
})
