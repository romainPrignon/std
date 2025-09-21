// test
import { type Fun, type Maybe, type Mutable, type AsyncFun, type Immutable, type Args, type UnknownArgs, type Returns, type UnknownReturns } from '../../src/type/index.js'
import * as Utils from '../../src/type/index.js'
import { expectTypeOf } from 'vitest'

const id = <T>(): T => ({}) as T

describe('index', () => {
  describe('Utils', () => {
    it('should export Args type', () => {
      expectTypeOf<Array<string>>(id<Utils.Args<string>>())
    })
    it('should export UnknownArgs type', () => {
      expectTypeOf<Array<unknown>>(id<Utils.UnknownArgs>())
    })
    it('should export AsyncFun type', () => {
      expectTypeOf<() => Promise<unknown>>(id<Utils.AsyncFun<Array<unknown>, unknown>>())
    })
    it('should export Fun type', () => {
      expectTypeOf<() => unknown>(id<Utils.Fun<Array<unknown>, unknown>>())
    })
    it('should export Maybe type', () => {
      expectTypeOf<number|undefined>(id<Utils.Maybe<number>>())
    })
    it('should export Mutable type', () => {
      const _foo = { bar: 'baz' } as const

      type ImmutableFoo = typeof _foo
      type MutableFoo = {bar: 'baz'}

      expectTypeOf<MutableFoo>(id<Utils.Mutable<ImmutableFoo>>())
    })
    it('should export Immutable type', () => {
      const _mutableFoo = { bar: 'baz' }
      type ImmutableFoo = {readonly bar: string}

      expectTypeOf<ImmutableFoo>(id<Utils.Immutable<typeof _mutableFoo>>())
    })
    it('should export Returns type', () => {
      expectTypeOf<string>(id<Utils.Returns<string>>())
    })
    it('should export UnknownReturns type', () => {
      expectTypeOf<unknown>(id<Utils.UnknownReturns>())
    })
  })

  describe('Args', () => {
    it('should export Args type', () => {
      expectTypeOf<Array<string>>(id<Args<string>>())
    })
  })
  describe('UnknownArgs', () => {
    it('should export UnknownArgs type', () => {
      expectTypeOf<Array<unknown>>(id<UnknownArgs>())
    })
  })

  describe('AsyncFun', () => {
    it('should export AsyncFun type', () => {
      expectTypeOf<() => Promise<unknown>>(id<AsyncFun<Array<unknown>, unknown>>())
    })
  })

  describe('Fun', () => {
    it('should export Fun type', () => {
      expectTypeOf<() => unknown>(id<Fun<Array<unknown>, unknown>>())
    })
  })

  describe('Maybe', () => {
    it('should export Maybe type', () => {
      expectTypeOf<number|undefined>(id<Maybe<number>>())
    })
  })

  describe('Mutable', () => {
    it('should export Mutable type', () => {
      const _foo = { bar: 'baz' } as const

      type ImmutableFoo = typeof _foo
      type MutableFoo = {bar: 'baz'}

      expectTypeOf<MutableFoo>(id<Mutable<ImmutableFoo>>())
    })
  })

  describe('Immutable', () => {
    it('should export Immutable type', () => {
      const _mutableFoo = { bar: 'baz' }
      type ImmutableFoo = {readonly bar: string}

      expectTypeOf<ImmutableFoo>(id<Immutable<typeof _mutableFoo>>())
    })
  })

  describe('Returns', () => {
    it('should export Returns type', () => {
      expectTypeOf<string>(id<Returns<string>>())
    })
  })
  describe('UnknownReturns', () => {
    it('should export UnknownReturns type', () => {
      expectTypeOf<unknown>(id<UnknownReturns>())
    })
  })
})
