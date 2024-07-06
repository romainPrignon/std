import { Maybe, Fun, UnknownArgs, UnknownReturns } from '../../type'


type MaybeFun = <A extends UnknownArgs, R extends UnknownReturns>(fun: Fun<A, R>) => (...args: A) => Maybe<R>
const maybe: MaybeFun = (fun) => (...args) => fun(...args)


export {
  maybe
}
