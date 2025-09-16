type ErrData = {
  code?: string
  cause?: Err | globalThis.Error
  context?: Record<string, unknown>
}

class Err extends Error {
  code?: string
  cause?: Err | globalThis.Error
  context?: Record<string, unknown>

  constructor (message: string, data?: ErrData) {
    super(message)
    this.code = 'Err'
    this.message = message
    this.code = data?.code ? data?.code : 'Err'
    this.cause = data?.cause
    this.context = data?.context

    Error.captureStackTrace(this, this.constructor)
  }

  static inherit (name: string): typeof Err {
    const errorClass = class extends this {
      constructor (message: string, data?: ErrData) {
        super(message, data)
        /* istanbul ignore next */
        this.code = data?.code ? data?.code : name
      }
    }

    Object.defineProperty(errorClass, 'name', { value: name })  

    return errorClass
  }
}

export { Err }
