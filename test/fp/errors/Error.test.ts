import { expectType } from 'tsd'

// test
import { Err, inherit } from '../../../src/fp/errors/Error.js'


describe('fp/errors/index.ts', () => {
  describe('Err()', () => {
    const message = 'message'
    const err = new globalThis.Error()
    const code = 'code'

    it('should be typed as Err', () => {
      expectType<Error>(Err(message, { cause: err, code }))
    })

    it('it should create an instance of Err', () => {
      // Arrange
      const errorMessage = 'Test error message'

      // Act
      const error = Err(errorMessage)

      // Assert
      expect(error).toBeInstanceOf(Err)
      expect(error.message).toBe(errorMessage)
      expect(error.code).toBe('Err')
      expect(error.cause).toBeUndefined()
      expect(error.context).toBeUndefined()
    })

    it('it should create an instance of Err with code, cause, context', () => {
      // Arrange
      const errorMessage = 'Test error message'
      const code = 'code'
      const context = {}

      // Act
      const error = Err(errorMessage, { code, cause: err, context })

      // Assert
      expect(error).toBeInstanceOf(Err)
      expect(error.message).toBe(errorMessage)
      expect(error.code).toBe(code)
      expect(error.cause).toBe(err)
      expect(error.context).toBe(context)
    })

    it('it should capture the stack trace', () => {
      // Arrange
      const errorMessage = 'Test error message'

      // Act
      const error = Err(errorMessage)

      // Assert
      expect(error.stack).toBeDefined()
    })

    it('it should create a new error class that inherits from Err', () => {
      // Arrange
      const errorMessage = 'Test error message'
      const errorCode = 'CustomError'
      const CustomError = inherit(Err, errorCode)

      // Act
      const error = CustomError(errorMessage)

      // Assert
      expect(error.name).toBe(errorCode)
      expect(error.message).toBe(errorMessage)
      expect(error.code).toBe(errorCode)
      expect(error.cause).toBeUndefined()
      expect(error.context).toBeUndefined()
      expect(error.stack).toBeDefined()
    })

    it('it should create a recursive error class that inherits from Err', () => {
      // Arrange
      const errorMessage = 'Test error message'
      const errorCode1 = 'CustomError1'
      const errorCode2 = 'CustomError2'
      const CustomError = inherit(inherit(Err, errorCode1), errorCode2)

      // Act
      const error = CustomError(errorMessage)

      // Assert
      expect(error.name).toBe(errorCode2)
      expect(error.message).toBe(errorMessage)
      expect(error.code).toBe(errorCode2)
      expect(error.stack).toBeDefined()
    })
  })
})
