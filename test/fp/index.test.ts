// test
import { arrays, classes, dates, errors, functions, numbers, objects, strings, data, struct } from '../../src/fp/index.js'
import * as fp from '../../src/fp/index.js'


describe('fp', () => {
  describe('namespace exports', () => {
    it('should export correct number of modules when accessing fp namespace', () => {
      // Arrange
      const expectedModuleCount = 10

      // Act
      const actualModuleCount = Object.entries(fp).length

      // Assert
      expect(actualModuleCount).toEqual(expectedModuleCount)
    })

    it('should export all modules via fp namespace when imported', () => {
      // Arrange
      const expectedModules = ['arrays', 'classes', 'dates', 'errors', 'functions', 'numbers', 'objects', 'strings', 'data', 'struct']

      // Act & Assert
      expectedModules.forEach(moduleName => {
        expect((fp as any)[moduleName]).toBeDefined()
      })
    })

    it('should export all modules via named imports when imported', () => {
      // Arrange
      const modules = { arrays, classes, dates, errors, functions, numbers, objects, strings, data, struct }

      // Act & Assert
      Object.values(modules).forEach(module => {
        expect(module).toBeDefined()
      })
    })
  })
})
