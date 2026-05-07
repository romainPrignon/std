import type { Class } from 'type-fest'

/**
 * Mixin function to combine multiple classes into one.
 * @example
 * class A { a = 1 }
 * class B { b = 2 }
 * const AB = mixin(A, B)
 * const ab = new AB()
 * ab.a // 1
 * ab.b // 2
 */
type Mixin = <T extends Class<any>, U extends Class<any>>(base: T, ...mixins: U[]) => Class<InstanceType<T> & InstanceType<U>, any>

const mixin: Mixin = (base, ...mixins) => {
  class MixedClass extends base {
    constructor(...args: any[]) {
      super(...args)
      mixins.forEach(mixin => {
        Object.getOwnPropertyNames(mixin.prototype).forEach(name => {
          if (name !== 'constructor') {
            Object.defineProperty(
              MixedClass.prototype,
              name,
              Object.getOwnPropertyDescriptor(mixin.prototype, name) || Object.create(null)
            )
          }
        })
      })
    }
  }
  return MixedClass
}

export {
  mixin
}
