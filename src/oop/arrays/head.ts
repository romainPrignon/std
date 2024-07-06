import { Maybe } from '../../type'


const head = <R>(arr: Array<R>): Maybe<R> => {
  const [head, ..._rest] = arr

  return head
}


export {
  head
}
