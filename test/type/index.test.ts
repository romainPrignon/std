import { expectType } from 'tsd'

// test
import { Fun, Maybe, Mutable, AsyncFun, Immutable, Args, UnknownArgs, Returns, UnknownReturns } from '../../src/type'
import * as Utils from '../../src/type'

const id = <T>(): T => ({}) as T

describe('index', () => {
  describe('Utils', () => {
    it('should export Args type', () => {
      expectType<Array<string>>(id<Utils.Args<string>>())
    })
    it('should export UnknownArgs type', () => {
      expectType<Array<unknown>>(id<Utils.UnknownArgs>())
    })
    it('should export AsyncFun type', () => {
      expectType<() => Promise<unknown>>(id<Utils.AsyncFun<Array<unknown>, unknown>>())
    })
    it('should export Fun type', () => {
      expectType<() => unknown>(id<Utils.Fun<Array<unknown>, unknown>>())
    })
    it('should export Maybe type', () => {
      expectType<number|undefined>(id<Utils.Maybe<number>>())
    })
    it('should export Mutable type', () => {
      const foo = { bar: 'baz' } as const

      type ImmutableFoo = typeof foo
      type MutableFoo = {bar: 'baz'}

      expectType<MutableFoo>(id<Utils.Mutable<ImmutableFoo>>())
    })
    it('should export Immutable type', () => {
      const mutableFoo = { bar: 'baz' }
      type ImmutableFoo = {readonly bar: string}

      expectType<ImmutableFoo>(id<Utils.Immutable<typeof mutableFoo>>())
    })
    it('should export Returns type', () => {
      expectType<string>(id<Utils.Returns<string>>())
    })
    it('should export UnknownReturns type', () => {
      expectType<unknown>(id<Utils.UnknownReturns>())
    })
  })

  describe('Args', () => {
    it('should export Args type', () => {
      expectType<Array<string>>(id<Args<string>>())
    })
  })
  describe('UnknownArgs', () => {
    it('should export UnknownArgs type', () => {
      expectType<Array<unknown>>(id<UnknownArgs>())
    })
  })

  describe('AsyncFun', () => {
    it('should export AsyncFun type', () => {
      expectType<() => Promise<unknown>>(id<AsyncFun<Array<unknown>, unknown>>())
    })
  })

  describe('Fun', () => {
    it('should export Fun type', () => {
      expectType<() => unknown>(id<Fun<Array<unknown>, unknown>>())
    })
  })

  describe('Maybe', () => {
    it('should export Maybe type', () => {
      expectType<number|undefined>(id<Maybe<number>>())
    })
  })

  describe('Mutable', () => {
    it('should export Mutable type', () => {
      const foo = { bar: 'baz' } as const

      type ImmutableFoo = typeof foo
      type MutableFoo = {bar: 'baz'}

      expectType<MutableFoo>(id<Mutable<ImmutableFoo>>())
    })
  })

  describe('Immutable', () => {
    it('should export Immutable type', () => {
      const mutableFoo = { bar: 'baz' }
      type ImmutableFoo = {readonly bar: string}

      expectType<ImmutableFoo>(id<Immutable<typeof mutableFoo>>())
    })
  })

  describe('Returns', () => {
    it('should export Returns type', () => {
      expectType<string>(id<Returns<string>>())
    })
  })
  describe('UnknownReturns', () => {
    it('should export UnknownReturns type', () => {
      expectType<unknown>(id<UnknownReturns>())
    })
  })
})
