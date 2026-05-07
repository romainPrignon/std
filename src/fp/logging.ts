/**
 * Log levels for structured logging.
 */
type LogLevel = 'debug' | 'info' | 'warn' | 'error'

/**
 * Structured log entry.
 */
interface LogEntry {
  level: LogLevel
  message: string
  timestamp: string
  data?: Record<string, unknown>
}

/**
 * Logger function type.
 */
type Logger = (level: LogLevel, message: string, data?: Record<string, unknown>) => void

/**
 * Create a structured logger.
 */
const createLogger = (): Logger => {
  return (level: LogLevel, message: string, data?: Record<string, unknown>) => {
    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      data
    }
    console.log(JSON.stringify(entry))
  }
}

/**
 * Debug log.
 */
const debug = (logger: Logger, message: string, data?: Record<string, unknown>) => {
  logger('debug', message, data)
}

/**
 * Info log.
 */
const info = (logger: Logger, message: string, data?: Record<string, unknown>) => {
  logger('info', message, data)
}

/**
 * Warn log.
 */
const warn = (logger: Logger, message: string, data?: Record<string, unknown>) => {
  logger('warn', message, data)
}

/**
 * Error log.
 */
const error = (logger: Logger, message: string, data?: Record<string, unknown>) => {
  logger('error', message, data)
}

export type {
  LogLevel,
  LogEntry,
  Logger
}

export {
  createLogger,
  debug,
  info,
  warn,
  error
}
