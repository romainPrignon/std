import type { Exception } from '../../type'


const raise = (err: Error): Exception => {
  throw err
}


export { raise }
