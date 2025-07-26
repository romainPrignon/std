type ExceptionOptions = {
  cause?: Error
  context?: Record<string, unknown>
}

class Exception extends Error {
  code?: string
  cause?: Error
  context?: Record<string, unknown>

  constructor (message: string, options?: ExceptionOptions) {
    super(message, options)
    this.code = 'Exception'
    this.message = message
    this.cause = options?.cause
    this.context = options?.context

    Error.captureStackTrace(this, this.constructor)
  }

  static derive (name: string): typeof Exception {
    const exceptionClass = class extends this {
      constructor (message: string, options?: ExceptionOptions) {
        super(message, options)
        this.code = name
      }
    }

    Object.defineProperty(exceptionClass, 'name', { value: name }) // eslint-disable-line

    return exceptionClass
  }
}

export { Exception }
