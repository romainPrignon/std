import { Exception as _Exception } from '../../_internal/error/Error'
import { callable } from '../classes/callable'


const Exception = callable(_Exception)

const derive = (err: typeof Exception, name: string) => (...args: ConstructorParameters<typeof _Exception>) => {
  const _err = err(...args)

  _err.name = name // eslint-disable-line
  _err.code = name // eslint-disable-line

  return _err
}


export {
  Exception,
  derive
}
