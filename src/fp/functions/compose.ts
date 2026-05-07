/**
 * Compose multiple functions into a single function.
 * Functions are composed from right to left.
 */
const compose = <T extends any[], R>(...funs: Array<(arg: any) => any>): ((...args: T) => R) => {
  return ((...args: T) => {
    return funs.reduceRight((acc, fun) => fun(acc), args[0])
  }) as ((...args: T) => R)
}

export {
  compose
}
