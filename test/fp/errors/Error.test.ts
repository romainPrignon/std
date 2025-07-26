import { expectType } from 'tsd'

// test
import { Exception, derive } from '../../../src/fp/errors/Error'


describe('fp/errors/index.ts', () => {
  describe('Exception()', () => {
    const message = 'message'
    const err = new Error()

    it('should be typed as Error', () => {
      expectType<Error>(Exception(message, { cause: err }))
    })

    it('it should create an instance of Err', () => {
      // Arrange
      const errorMessage = 'Test error message'

      // Act
      const error = Exception(errorMessage)

      // Assert
      expect(error).toBeInstanceOf(Exception)
      expect(error.message).toBe(errorMessage)
      expect(error.code).toBe('Exception')
      expect(error.cause).toBeUndefined()
      expect(error.context).toBeUndefined()
    })

    it('it should create an instance of Exception with  cause, context', () => {
      // Arrange
      const errorMessage = 'Test error message'
      const context = {}

      // Act
      const error = Exception(errorMessage, { cause: err, context })

      // Assert
      expect(error).toBeInstanceOf(Exception)
      expect(error.message).toBe(errorMessage)
      expect(error.code).toBe('Exception')
      expect(error.cause).toBe(err)
      expect(error.context).toBe(context)
    })

    it('it should capture the stack trace', () => {
      // Arrange
      const errorMessage = 'Test error message'

      // Act
      const error = Exception(errorMessage)

      // Assert
      expect(error.stack).toBeDefined()
    })

    it('it should create a new exception class that inherits from Exception', () => {
      // Arrange
      const errorMessage = 'Test error message'
      const errorName = 'CustomError'
      const CustomError = derive(Exception, errorName)

      // Act
      const error = CustomError(errorMessage)

      // Assert
      expect(error.name).toBe(errorName)
      expect(error.message).toBe(errorMessage)
      expect(error.code).toBe(errorName)
      expect(error.cause).toBeUndefined()
      expect(error.context).toBeUndefined()
      expect(error.stack).toBeDefined()
    })

    it('it should create a recursive exception class that inherits from Exception', () => {
      // Arrange
      const errorMessage = 'Test error message'
      const errorName1 = 'CustomError1'
      const errorName2 = 'CustomError2'
      const CustomError = derive(derive(Exception, errorName1), errorName2)

      // Act
      const error = CustomError(errorMessage)

      // Assert
      expect(error.name).toBe(errorName2)
      expect(error.message).toBe(errorMessage)
      expect(error.code).toBe(errorName2)
      expect(error.stack).toBeDefined()
    })
  })
})
