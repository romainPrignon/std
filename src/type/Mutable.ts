type Mutable<T> = { -readonly [P in keyof T]: Mutable<T[P]> }


export type {
  Mutable
}
