// test
import { imut, mut } from '../../../src/fp/data/index.js'
import * as data from '../../../src/fp/data/index.js'


describe('data', () => {
  it('should export data namespace', () => {
    expect(Object.entries(data).length).toEqual(2)

    expect(data.imut).toBeDefined()
    expect(data.mut).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(imut).toBeDefined()
    expect(mut).toBeDefined()
  })
})
