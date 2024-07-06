# @romainprignon/std

> Thing that may be in a Standard library


## Setup

```sh
npm install --save @romainprignon/std
```


## API

Way to import std
```js
import * as std from '@romainprignon/std'
import {oop, fp} from '@romainprignon/std'
import * as oop from '@romainprignon/std/oop'
import {fs} from '@romainprignon/std/oop'
import {readFile} from '@romainprignon/std/fp/fs'
```

See [dist/index.d.ts](dist/index.d.ts)


## Contribute

See [package.json](package.json) scripts section

### Principles
- import dir instead of file. Easier in case of renaming
```js
import { may } from '../functions/may' // bad
import { may } from '../functions' // good
```
- keep standard function signature as much as possible
- prefer type over defensive programming
```js
(path: string, encoding?: string) => Buffer.isEncoding(encoding) // bad
```
```js
(path: string, encoding?: Encoding) => ... // good
```

### Release

Example: Releasing a minor version using semver

```sh
npm run ci:publish:minor -- otp=***
```


## License

The code is available under the [MIT license](LICENSE.md).
