// test
import * as strings from '../../../src/oop/strings/index.js'


describe('strings', () => {
  it('should export strings namespace', () => {
    expect(Object.entries(strings).length).toEqual(0)
  })
})
