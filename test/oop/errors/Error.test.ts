import { expectTypeOf } from 'vitest'

// test
import { Err } from '../../../src/oop/errors/index.js'


describe('oop/error/index.ts', () => {
  describe('new Err', () => {
    const message = 'message'
    const err = new globalThis.Error()

    it('should be typed as Error', () => {
      expectTypeOf<Error>(new Err(message, { cause: err }))
    })

    it('it should create an instance of Err', () => {
      // Arrange
      const errorMessage = 'Test error message'

      // Act
      const error = new Err(errorMessage)

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
      const error = new Err(errorMessage, { code, cause: err, context })

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
      const error = new Err(errorMessage)

      // Assert
      expect(error.stack).toBeDefined()
    })

    it('it should create a new error class that inherits from Err', () => {
      // Arrange
      const errorMessage = 'Test error message'
      const errorCode = 'CustomError'
      const CustomError = Err.inherit(errorCode)

      // Act
      const error = new CustomError(errorMessage)

      // Assert
      expect(error).toBeInstanceOf(CustomError)
      expect(error).toBeInstanceOf(Err)
      expect(error.message).toBe(errorMessage)
      expect(error.code).toBe(errorCode)
      expect(error.cause).toBeUndefined()
      expect(error.context).toBeUndefined()
    })

    it('it should create a recursive error class that inherits from Err', () => {
      // Arrange
      const errorMessage = 'Test error message'
      const errorCode1 = 'CustomError1'
      const errorCode2 = 'CustomError2'
      const CustomError = Err.inherit(errorCode1).inherit(errorCode2)

      // Act
      const error = new CustomError(errorMessage)

      // Assert
      expect(error).toBeInstanceOf(CustomError)
      expect(error).toBeInstanceOf(Err)
      expect(error.message).toBe(errorMessage)
      expect(error.code).toBe(errorCode2)
      expect(error.cause).toBeUndefined()
      expect(error.context).toBeUndefined()
    })
  })
})
