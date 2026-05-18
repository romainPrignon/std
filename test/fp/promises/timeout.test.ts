// test
import { delay } from '../../../src/fp/promises/delay.js'
import { timeout } from '../../../src/fp/promises/timeout.js'

describe('fp/promises/timeout.ts', () => {
  describe('timeout()', () => {

    it('should not reject when used with fast promise', async () => {
      const timeoutAfter50ms = timeout(50)

      const result = timeoutAfter50ms(Promise.resolve(42))

      await expect(result).resolves.toEqual(42)
    })

    it('should reject when used with slow promise', async () => {
      const timeoutAfter50ms = timeout(50)

      const result = () => timeoutAfter50ms(delay(100))

      await expect(result).rejects.toThrowErrorMatchingInlineSnapshot(`[Error: Promise timeout]`)
    })

    // it('should handle zero timeout', async () => {
    //   const start = performance.now()
    //   await timeout(0)
    //   const end = performance.now()

    //   const duration = end - start
    //   expect(duration).toBeLessThan(10)
    // })

    // it('should handle negative timeout as zero', async () => {
    //   const start = performance.now()
    //   await timeout(-100)
    //   const end = performance.now()

    //   const duration = end - start
    //   expect(duration).toBeLessThan(10)
    // })
  })
})
