import { Err } from "../errors/Error.js"

/**
 * @param after in ms
 */
export const timeout = (after: number) => <T>(promFn: Promise<T>): Promise<T> => {
  return new Promise<T>((resolve, reject) => {

    setTimeout(() => reject(Err('Promise timeout', { code: 'ERR_PROMISE_TIMEOUT', context: { after } })), after)

    promFn.then(resolve, reject)
  })
}
