// test
import * as objects from '../../../src/oop/objects/index.js'


describe('objects', () => {
  it('should export objects namespace', () => {
    expect(Object.entries(objects).length).toEqual(0)
  })
})
