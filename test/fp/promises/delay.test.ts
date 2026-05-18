// test
import { delay } from '../../../src/fp/promises/delay.js'

describe('fp/promises/delay.ts', () => {
  describe('delay()', () => {

    it('should return a Promise', () => {
      const output = delay(100)

      expect(output).toBeInstanceOf(Promise)
    })

    it('should await the specified amount of time before returning', async () => {

      const start = performance.now()
      await delay(100)
      const end = performance.now()

      const duration = end - start

      expect(duration).toBeLessThan(110)
    })
    it('should resolve with void', async () => {
      const result = await delay(100)
      expect(result).toBeUndefined()
    })

    it('should handle zero delay', async () => {
      const start = performance.now()
      await delay(0)
      const end = performance.now()

      const duration = end - start
      expect(duration).toBeLessThan(10)
    })

    it('should handle negative delay as zero', async () => {
      const start = performance.now()
      await delay(-100)
      const end = performance.now()

      const duration = end - start
      expect(duration).toBeLessThan(10)
    })
  })
})
