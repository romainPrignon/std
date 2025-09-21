// test
import { fp, oop, struct } from '../src/index.js'
import * as Utils from '../src/index.js'


describe('index', () => {
  describe('Utils', () => {
    it('should export namespaces', () => {
      expect(Utils.fp).toBeDefined()
      expect(Utils.oop).toBeDefined()
      expect(Utils.struct).toBeDefined()
    })
  })

  describe('fp', () => {
    it('should export fp namespace', () => {
      expect(Object.entries(fp).length).toEqual(10)

      expect(fp.arrays).toBeDefined()
      expect(fp.classes).toBeDefined()
      expect(fp.dates).toBeDefined()
      expect(fp.errors).toBeDefined()
      expect(fp.functions).toBeDefined()
      expect(fp.numbers).toBeDefined()
      expect(fp.objects).toBeDefined()
      expect(fp.strings).toBeDefined()
      expect(fp.data).toBeDefined()
      expect(fp.struct).toBeDefined()
    })
  })

  describe('oop', () => {
    it('should export oop namespace', () => {
      expect(Object.entries(oop).length).toEqual(10)

      expect(oop.arrays).toBeDefined()
      expect(oop.classes).toBeDefined()
      expect(oop.dates).toBeDefined()
      expect(oop.errors).toBeDefined()
      expect(oop.functions).toBeDefined()
      expect(oop.numbers).toBeDefined()
      expect(oop.objects).toBeDefined()
      expect(oop.strings).toBeDefined()
      expect(oop.data).toBeDefined()
      expect(oop.struct).toBeDefined()
    })
  })

  describe('struct', () => {
    it('should export struct namespace', () => {
      expect(struct.Promise).toBeDefined()
      expect(struct.EmptyArray).toBeDefined()
      expect(struct.EmptyString).toBeDefined()
      expect(struct.NonEmptyArray).toBeDefined()
    })
  })
})
