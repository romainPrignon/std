// test
import type { Fun, Maybe, Mutable, AsyncFun, Immutable, Args, UnknownArgs, Returns, UnknownReturns } from '../../src/type/index.js'
import * as Utils from '../../src/type/index.js'
import { expectTypeOf } from 'vitest'

const id = <T>(a: T): T => a

describe('index', () => {
  describe('Utils', () => {
    it('should export Args type', () => {
      expectTypeOf<Array<string>>(id<Utils.Args<string>>([]))
    })
    it('should export UnknownArgs type', () => {
      expectTypeOf<Array<unknown>>(id<Utils.UnknownArgs>([]))
    })
    it('should export AsyncFun type', () => {
      expectTypeOf<() => Promise<unknown>>(id<Utils.AsyncFun<Array<unknown>, unknown>>(async () => { }))
    })
    it('should export Fun type', () => {
      expectTypeOf<() => unknown>(id<Utils.Fun<Array<unknown>, unknown>>(() => { }))
    })
    it('should export Maybe type', () => {
      expectTypeOf<number | undefined>(id<Utils.Maybe<number>>(undefined))
    })
    it('should export Mutable type', () => {
      const _foo = { bar: 'baz' } as const

      type ImmutableFoo = typeof _foo
      type MutableFoo = {bar: 'baz'}

      expectTypeOf<MutableFoo>(id<Utils.Mutable<ImmutableFoo>>({ bar: 'baz' }))
    })
    it('should export Immutable type', () => {
      const _mutableFoo = { bar: 'baz' }
      type ImmutableFoo = {readonly bar: string}

      expectTypeOf<ImmutableFoo>(id<Utils.Immutable<typeof _mutableFoo>>(_mutableFoo))
    })
    it('should export Returns type', () => {
      expectTypeOf<string>(id<Utils.Returns<string>>(''))
    })
    it('should export UnknownReturns type', () => {
      expectTypeOf<unknown>(id<Utils.UnknownReturns>({}))
    })
  })

  describe('Args', () => {
    it('should export Args type', () => {
      expectTypeOf<Array<string>>(id<Args<string>>([]))
    })
  })
  describe('UnknownArgs', () => {
    it('should export UnknownArgs type', () => {
      expectTypeOf<Array<unknown>>(id<UnknownArgs>([]))
    })
  })

  describe('AsyncFun', () => {
    it('should export AsyncFun type', () => {
      expectTypeOf<() => Promise<unknown>>(id<AsyncFun<Array<unknown>, unknown>>(async () => { }))
    })
  })

  describe('Fun', () => {
    it('should export Fun type', () => {
      expectTypeOf<() => unknown>(id<Fun<Array<unknown>, unknown>>(() => { }))
    })
  })

  describe('Maybe', () => {
    it('should export Maybe type', () => {
      expectTypeOf<number | undefined>(id<Maybe<number>>(undefined))
    })
  })

  describe('Mutable', () => {
    it('should export Mutable type', () => {
      const _foo = { bar: 'baz' } as const

      type ImmutableFoo = typeof _foo
      type MutableFoo = {bar: 'baz'}

      expectTypeOf<MutableFoo>(id<Mutable<ImmutableFoo>>({ bar: 'baz' }))
    })
  })

  describe('Immutable', () => {
    it('should export Immutable type', () => {
      const _mutableFoo = { bar: 'baz' }
      type ImmutableFoo = {readonly bar: string}

      expectTypeOf<ImmutableFoo>(id<Immutable<typeof _mutableFoo>>(_mutableFoo))
    })
  })

  describe('Returns', () => {
    it('should export Returns type', () => {
      expectTypeOf<string>(id<Returns<string>>(''))
    })
  })
  describe('UnknownReturns', () => {
    it('should export UnknownReturns type', () => {
      expectTypeOf<unknown>(id<UnknownReturns>({}))
    })
  })
})
