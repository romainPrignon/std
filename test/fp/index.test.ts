// test
import { arrays, classes, dates, errors, functions, numbers, objects, strings, data, struct } from '../../src/fp/index.js'
import * as fp from '../../src/fp/index.js'

describe('fp', () => {
  describe('namespace exports', () => {
    it('should export fp namespace with all modules', () => {
      // Arrange & Act
      const moduleCount = Object.entries(fp).length

      // Assert
      expect(moduleCount).toEqual(10)
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

    it('should export all individual modules', () => {
      // Arrange
      const modules = { arrays, classes, dates, errors, functions, numbers, objects, strings, data, struct }

      // Act & Assert
      Object.entries(modules).forEach(([_name, module]) => {
        expect(module).toBeDefined()
      })
    })
  })
})
