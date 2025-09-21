import is from '@sindresorhus/is'
import * as z from 'zod'


const EmptyString: z.ZodCustom<"", ""> = z.custom<''>(is.emptyString, {
  message: 'Expect Empty String'
})


export {
  EmptyString
}
