// test
import { arrays, classes, dates, errors, functions, numbers, objects, strings, data, struct } from '../../src/fp/index.js'
import * as fp from '../../src/fp/index.js'


describe('fp', () => {
  it('should export fp namespace', () => {
    // Arrange
    const expectedLength = 10

    // Act
    const entries = Object.entries(fp)

    // Assert
    expect(entries.length).toEqual(expectedLength)

    expect(fp.arrays).toBeDefined()
    expect(fp.classes).toBeDefined()
    expect(fp.dates).toBeDefined()
    expect(fp.errors).toBeDefined()
    expect(fp.functions).toBeDefined()
    expect(fp.numbers).toBeDefined()
    expect(fp.objects).toBeDefined()
    expect(fp.strings).toBeDefined()
    expect(fp.data).toBeDefined()
    expect(fp.struct).toBeDefined()
  })

  it('should export all namespace', () => {
    // Assert
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
