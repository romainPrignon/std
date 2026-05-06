// test
import { arrays, classes, dates, errors, functions, numbers, objects, strings, data, struct } from '../../src/fp/index.js'
import * as fp from '../../src/fp/index.js'

describe('fp', () => {
  describe('namespace exports', () => {
    it('should export fp namespace with all modules', () => {
      // Arrange
      const expectedModules = [
        'arrays', 'classes', 'dates', 'errors', 'functions',
        'numbers', 'objects', 'strings', 'data', 'struct'
      ]

      // Act
      const moduleCount = Object.entries(fp).length

      // Assert
      expect(moduleCount).toEqual(10)
      expectedModules.forEach(module => {
        expect(fp[module as keyof typeof fp]).toBeDefined()
      })
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
