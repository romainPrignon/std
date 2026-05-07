/**
 * A Mixin is a function that takes a base class and returns a new class
 * that extends the base class and adds new functionality.
 */
export type Constructor<T = {}> = new (...args: any[]) => T;

export type Mixin<TBase, TExtends> = (base: Constructor<TBase>) => Constructor<TBase & TExtends>;

/**
 * Applies multiple mixins to a base class.
 *
 * @example
 * const MixedClass = applyMixins(BaseClass, Mixin1, Mixin2);
 */
export function applyMixins<TBase>(
  base: Constructor<TBase>,
  ...mixins: Mixin<any, any>[]
): Constructor<TBase & any> {
  return mixins.reduce((acc, mixin) => mixin(acc), base) as any;
}
