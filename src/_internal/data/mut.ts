import type { Mutable } from '../../type/index.js'


const mut = <T>(data: T): Mutable<T> => data


export {
  mut
}
