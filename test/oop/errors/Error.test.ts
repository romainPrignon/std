import { expectType } from 'tsd'

// test
import { Exception } from '../../../src/oop/errors'


describe('oop/error/index.ts', () => {
  describe('new Exception', () => {
    const message = 'message'
    const err = new Error()

    it('should be typed as Exception', () => {
      expectType<Exception>(new Exception(message, { cause: err }))
    })

    it('it should create an instance of Exception', () => {
      // Arrange
      const errorMessage = 'Test error message'

      // Act
      const error = new Exception(errorMessage)

      // Assert
      expect(error).toBeInstanceOf(Exception)
      expect(error.message).toBe(errorMessage)
      expect(error.code).toBe('Exception')
      expect(error.cause).toBeUndefined()
      expect(error.context).toBeUndefined()
    })

    it('it should create an instance of Exception with cause, context', () => {
      // Arrange
      const errorMessage = 'Test error message'
      const context = {}

      // Act
      const error = new Exception(errorMessage, { cause: err, context })

      // Assert
      expect(error).toBeInstanceOf(Exception)
      expect(error.message).toBe(errorMessage)
      expect(error.cause).toBe(err)
      expect(error.context).toBe(context)
    })

    it('it should capture the stack trace', () => {
      // Arrange
      const errorMessage = 'Test error message'

      // Act
      const error = new Exception(errorMessage)

      // Assert
      expect(error.stack).toBeDefined()
    })

    it('it should create a new exception class that inherits from Exception', () => {
      // Arrange
      const errorMessage = 'Test error message'
      const errorName = 'CustomError'
      const CustomError = Exception.derive(errorName)

      // Act
      const error = new CustomError(errorMessage)

      // Assert
      expect(error).toBeInstanceOf(CustomError)
      expect(error).toBeInstanceOf(Exception)
      expect(error.message).toBe(errorMessage)
      expect(error.code).toBe(errorName)
      expect(error.cause).toBeUndefined()
      expect(error.context).toBeUndefined()
    })

    it('it should create a recursive exception class that inherits from Exception', () => {
      // Arrange
      const errorMessage = 'Test error message'
      const errorName1 = 'CustomError1'
      const errorName2 = 'CustomError2'
      const CustomError = Exception.derive(errorName1).derive(errorName2)

      // Act
      const error = new CustomError(errorMessage)

      // Assert
      expect(error).toBeInstanceOf(CustomError)
      expect(error).toBeInstanceOf(Exception)
      expect(error.message).toBe(errorMessage)
      expect(error.code).toBe(errorName2)
      expect(error.cause).toBeUndefined()
      expect(error.context).toBeUndefined()
    })
  })
})
