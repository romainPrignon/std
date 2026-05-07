/**
 * A Deferred object represents a promise that can be resolved or rejected manually.
 */
export class Deferred<T> {
  public readonly promise: Promise<T>
  public resolve!: (value: T | PromiseLike<T>) => void
  public reject!: (reason?: any) => void

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }
}
