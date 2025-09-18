import { CurriedFunction2 } from 'lodash'
import l from 'lodash/fp'

const isMultipleOf: CurriedFunction2<number, number, boolean> = l.curry((divisor: number, val: number): boolean =>
  val % divisor === 0
)

export {
  isMultipleOf
}
