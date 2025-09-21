import type { Exception } from '../../type/index.js'


const raise = (err: Error): Exception => {
  throw err
}


export { raise }
