/**
 * @param n in ms
 */
export const delay = (n: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), n)
  })
}
