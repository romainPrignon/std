import { Err as _Err, ErrData } from '../../_internal/error/Error'
import type { Fun } from '../../type/Fun'
import { callable } from '../classes/callable'


const Err: Fun<[message: string, data?: ErrData], _Err> = callable(_Err)

const inherit = (err: typeof Err, name: string) => (...args: ConstructorParameters<typeof _Err>): _Err => {
  const _err = err(...args)
  const [, data] = args

  _err.name = name
  /* istanbul ignore next */
  _err.code = data?.code ? data?.code : name

  return _err
}


export {
  Err,
  inherit
}
