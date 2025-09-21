// test
import { arrays, classes, dates, errors, functions, numbers, objects, strings, data, struct } from '../../src/oop/index.js'
import * as Native from '../../src/oop/index.js'


describe('oop', () => {
  it('should export Native namespace', () => {
    expect(Object.entries(Native).length).toEqual(10)

    expect(Native.arrays).toBeDefined()
    expect(Native.classes).toBeDefined()
    expect(Native.dates).toBeDefined()
    expect(Native.errors).toBeDefined()
    expect(Native.functions).toBeDefined()
    expect(Native.numbers).toBeDefined()
    expect(Native.objects).toBeDefined()
    expect(Native.strings).toBeDefined()
    expect(Native.data).toBeDefined()
    expect(Native.struct).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(arrays).toBeDefined()
    expect(classes).toBeDefined()
    expect(dates).toBeDefined()
    expect(errors).toBeDefined()
    expect(functions).toBeDefined()
    expect(numbers).toBeDefined()
    expect(objects).toBeDefined()
    expect(strings).toBeDefined()
    expect(data).toBeDefined()
    expect(struct).toBeDefined()
  })
})
