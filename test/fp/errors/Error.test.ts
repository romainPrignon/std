import { describe, expect, expectTypeOf, it } from 'vitest'
import { Err, inherit } from '../../../src/fp/errors/Error.js'

describe('fp/errors/index.ts', () => {
  describe('Err()', () => {
    it('should return Error type when creating error with all options', () => {
      // Arrange
      const message = 'message'
      const err = new globalThis.Error()
      const code = 'code'

      // Act
      const result = Err(message, { cause: err, code })

      // Assert
      expectTypeOf<Error>(result)
    })

    it('should create instance of Err when providing only message', () => {
      // Arrange
      const errorMessage = 'Test error message'

      // Act
      const error = Err(errorMessage)

      // Assert
      expect(error).toBeInstanceOf(Err)
    })

    it('should set message property when creating error', () => {
      // Arrange
      const errorMessage = 'Test error message'

      // Act
      const error = Err(errorMessage)

      // Assert
      expect(error.message).toBe(errorMessage)
    })

    it('should set default code to Err when no code provided', () => {
      // Arrange
      const errorMessage = 'Test error message'

      // Act
      const error = Err(errorMessage)

      // Assert
      expect(error.code).toBe('Err')
    })

    it('should leave cause undefined when not provided', () => {
      // Arrange
      const errorMessage = 'Test error message'

      // Act
      const error = Err(errorMessage)

      // Assert
      expect(error.cause).toBeUndefined()
    })

    it('should leave context undefined when not provided', () => {
      // Arrange
      const errorMessage = 'Test error message'

      // Act
      const error = Err(errorMessage)

      // Assert
      expect(error.context).toBeUndefined()
    })

    it('should set custom code when provided in options', () => {
      // Arrange
      const errorMessage = 'Test error message'
      const code = 'CUSTOM_CODE'
      const err = new globalThis.Error()
      const context = {}

      // Act
      const error = Err(errorMessage, { code, cause: err, context })

      // Assert
      expect(error.code).toBe(code)
    })

    it('should set cause when provided in options', () => {
      // Arrange
      const errorMessage = 'Test error message'
      const code = 'code'
      const err = new globalThis.Error()
      const context = {}

      // Act
      const error = Err(errorMessage, { code, cause: err, context })

      // Assert
      expect(error.cause).toBe(err)
    })

    it('should set context when provided in options', () => {
      // Arrange
      const errorMessage = 'Test error message'
      const code = 'code'
      const err = new globalThis.Error()
      const context = { key: 'value' }

      // Act
      const error = Err(errorMessage, { code, cause: err, context })

      // Assert
      expect(error.context).toBe(context)
    })

    it('should capture stack trace when creating error', () => {
      // Arrange
      const errorMessage = 'Test error message'

      // Act
      const error = Err(errorMessage)

      // Assert
      expect(error.stack).toBeDefined()
    })

    it('should set error name to custom code when inheriting', () => {
      // Arrange
      const errorMessage = 'Test error message'
      const errorCode = 'CustomError'
      const CustomError = inherit(Err, errorCode)

      // Act
      const error = CustomError(errorMessage)

      // Assert
      expect(error.name).toBe(errorCode)
    })

    it('should set default code from inherited name when no code provided', () => {
      // Arrange
      const errorMessage = 'Test error message'
      const errorCode = 'CustomError'
      const CustomError = inherit(Err, errorCode)

      // Act
      const error = CustomError(errorMessage)

      // Assert
      expect(error.code).toBe(errorCode)
    })

    it('should override inherited code when custom code provided', () => {
      // Arrange
      const errorMessage = 'Test error message'
      const errorCode = 'CustomError'
      const customCode = 'CUSTOM_CODE'
      const CustomError = inherit(Err, errorCode)

      // Act
      const error = CustomError(errorMessage, { code: customCode })

      // Assert
      expect(error.code).toBe(customCode)
    })

    it('should maintain name as inherited class name when code overridden', () => {
      // Arrange
      const errorMessage = 'Test error message'
      const errorCode = 'CustomError'
      const customCode = 'CUSTOM_CODE'
      const CustomError = inherit(Err, errorCode)

      // Act
      const error = CustomError(errorMessage, { code: customCode })

      // Assert
      expect(error.name).toBe(errorCode)
    })

    it('should capture stack trace in inherited error', () => {
      // Arrange
      const errorMessage = 'Test error message'
      const errorCode = 'CustomError'
      const CustomError = inherit(Err, errorCode)

      // Act
      const error = CustomError(errorMessage)

      // Assert
      expect(error.stack).toBeDefined()
    })

    it('should use last inherited name when chaining multiple inherits', () => {
      // Arrange
      const errorMessage = 'Test error message'
      const errorCode1 = 'CustomError1'
      const errorCode2 = 'CustomError2'
      const CustomError = inherit(inherit(Err, errorCode1), errorCode2)

      // Act
      const error = CustomError(errorMessage)

      // Assert
      expect(error.name).toBe(errorCode2)
    })

    it('should use last inherited code when chaining multiple inherits', () => {
      // Arrange
      const errorMessage = 'Test error message'
      const errorCode1 = 'CustomError1'
      const errorCode2 = 'CustomError2'
      const CustomError = inherit(inherit(Err, errorCode1), errorCode2)

      // Act
      const error = CustomError(errorMessage)

      // Assert
      expect(error.code).toBe(errorCode2)
    })
  })
})

