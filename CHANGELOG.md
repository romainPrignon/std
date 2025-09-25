# Changelog

<a name="5.0.0"></a>
## 5.0.0 (2025-09-25)

### Added

- ✨ feat: add dependabot configuration file to automate dependency updates ([#28](https://github.com/romainPrignon/std/issues/28)) [[33e3031](https://github.com/romainPrignon/std/commit/33e30317542620813e1fa5d06cb377403bc89953)]
- ✅ test: enhance type checking and code quality with coverage and linting ([#26](https://github.com/romainPrignon/std/issues/26)) [[d52c373](https://github.com/romainPrignon/std/commit/d52c37358ef8a806c749b72f0e21e4e4558d7ee7)]
- ✅ test: added noUncheckedSideEffectImports to tsconfig ([#19](https://github.com/romainPrignon/std/issues/19)) [[3e2b0fd](https://github.com/romainPrignon/std/commit/3e2b0fd5086e8b5c42cef03084ff3fc2129b550b)]
- ✨ update github copilot instructions file with review instruction [[c84f439](https://github.com/romainPrignon/std/commit/c84f439a0b64f704e2d2129c9a74b3aecda3a56f)]
- ✨ add github copilot instructions file [[f00f4fb](https://github.com/romainPrignon/std/commit/f00f4fb492494781783149184b78da8f6f746c17)]

### Changed

- 🔧 chore: add commit message prefix for dependabot updates ([#32](https://github.com/romainPrignon/std/issues/32)) [[43ecfe1](https://github.com/romainPrignon/std/commit/43ecfe12672b1b034eb49c3ebf885266db1c5233)]
- ⬆️ chore: use frozen lockfile and cache dependency path for pnpm install in CI ([#27](https://github.com/romainPrignon/std/issues/27)) [[5371b20](https://github.com/romainPrignon/std/commit/5371b204011335d52ce7b8749de8022d496ca0ec)]
- ♻️ refactor: remove unnecessary bundle script and update deploy script ([#25](https://github.com/romainPrignon/std/issues/25)) [[4ec6bd5](https://github.com/romainPrignon/std/commit/4ec6bd532559b77bc76f66e0d222eac713af5fd2)]
- ⬆️ chore: update vitest and eslint plugins ([#23](https://github.com/romainPrignon/std/issues/23)) [[4197ae5](https://github.com/romainPrignon/std/commit/4197ae5678a5dc6abc1eb1742920000057f152d7)]
- 🔧 chore: add .env file with configuration for commitlint ([#18](https://github.com/romainPrignon/std/issues/18)) [[228ef68](https://github.com/romainPrignon/std/commit/228ef68412e7eb450dbf767cb2aa8461f7d4fa63)]
- 🚨 Update eslint to version 9 ([#11](https://github.com/romainPrignon/std/issues/11)) [[7c3e904](https://github.com/romainPrignon/std/commit/7c3e904709b3e63ec8171f015f5bad0bd15df690)]
- ⬆️ Upgrade typescript to version 5.9 [[539d5cd](https://github.com/romainPrignon/std/commit/539d5cd629930a31a9d6b654c5b0d883156aea26)]
- ⬆️ upgrade node to version 22 [[bdf1bcf](https://github.com/romainPrignon/std/commit/bdf1bcf79ee8cd449c0dedc3045f63745213fe80)]

### Miscellaneous

-  Bump eslint-plugin-n from 17.23.0 to 17.23.1 in the minor-all group ([#29](https://github.com/romainPrignon/std/issues/29)) [[170e3bf](https://github.com/romainPrignon/std/commit/170e3bf46858ad78f082c4e41d8828b50901cb14)]
-  Bump @typescript/native-preview ([#31](https://github.com/romainPrignon/std/issues/31)) [[2f2f85f](https://github.com/romainPrignon/std/commit/2f2f85f38206bb617c5aef2d8cb34e42b9bb2f45)]
-  try tsdown ([#24](https://github.com/romainPrignon/std/issues/24)) [[c6e2381](https://github.com/romainPrignon/std/commit/c6e23812be6dc4c0405b434cd7023a12cdddb9b5)]
-  feat/esm ([#22](https://github.com/romainPrignon/std/issues/22)) [[9776b02](https://github.com/romainPrignon/std/commit/9776b022fde0649df3b8b277bce12ed0f854e9b5)]
-  feat: add integration test ([#21](https://github.com/romainPrignon/std/issues/21)) [[9a1b811](https://github.com/romainPrignon/std/commit/9a1b81194e6d857cab0fb9525c98a9a5464b2124)]
-  feat(lint): enable type-aware linting and configure typescript rules ([#20](https://github.com/romainPrignon/std/issues/20)) [[3710a0e](https://github.com/romainPrignon/std/commit/3710a0ef87cf815d05ebb7dad5609aedc0f8f5d7)]
-  feat(dx): add dev script for concurrent type-checking and testing ([#17](https://github.com/romainPrignon/std/issues/17)) [[387cb16](https://github.com/romainPrignon/std/commit/387cb16fbd4894c859445e249b51274f8590ed79)]
-  chore(build): harden TypeScript configuration for improved type safety ([#16](https://github.com/romainPrignon/std/issues/16)) [[c1d1a6d](https://github.com/romainPrignon/std/commit/c1d1a6d0db705012624ca376f208219d9e83ea59)]
-  feat(dev): use tsgo for faster type-checking and fix inferred types ([#15](https://github.com/romainPrignon/std/issues/15)) [[77f213e](https://github.com/romainPrignon/std/commit/77f213e07c7b2652bf3bedf4d78b003bce588e28)]
-  feat(lint): set up oxlint for faster code analysis and quality checks ([#14](https://github.com/romainPrignon/std/issues/14)) [[745f85f](https://github.com/romainPrignon/std/commit/745f85f898f234981059b2d24bc198deaf752b70)]
-  chore: bump husky to version 9 ([#13](https://github.com/romainPrignon/std/issues/13)) [[976baf7](https://github.com/romainPrignon/std/commit/976baf7873d3e46e1f6f01c9b4c1db5664bc2cb6)]
-  feat/update copilot instructions ([#12](https://github.com/romainPrignon/std/issues/12)) [[41e802d](https://github.com/romainPrignon/std/commit/41e802d67e92c4208bd7c5c0dd133e092ac78b4e)]
-  Merge pull request [#10](https://github.com/romainPrignon/std/issues/10) from romainPrignon/chore/bump-typescript [[8b48655](https://github.com/romainPrignon/std/commit/8b486558a086074f00bcc943dded177519b8a9f4)]
-  Merge pull request [#9](https://github.com/romainPrignon/std/issues/9) from romainPrignon/chore/bump-node [[f11821a](https://github.com/romainPrignon/std/commit/f11821a203e1e84d7076816b36f575fd91c75b39)]
-  Merge pull request [#5](https://github.com/romainPrignon/std/issues/5) from romainPrignon/chore/bump-jest [[7740cba](https://github.com/romainPrignon/std/commit/7740cbae91424767ec87edf6ea055e4160ad9f8b)]
-  chore: bump jest to version 30 [[255944d](https://github.com/romainPrignon/std/commit/255944db2b5b78c9cca8c3a7b6f8eebe86dd4497)]
-  Merge pull request [#4](https://github.com/romainPrignon/std/issues/4) from romainPrignon/chore/copilot-instructions [[bace140](https://github.com/romainPrignon/std/commit/bace14055f37337db95738532f8689b12dad484f)]
-  Merge pull request [#2](https://github.com/romainPrignon/std/issues/2) from romainPrignon/chore/update-dependencies [[3b4a7a4](https://github.com/romainPrignon/std/commit/3b4a7a4050328f33f57bcf1b0e549339cb3a38f3)]
-  I&#x27;ve updated all dependencies to their latest patch and minor versions. [[43ffacc](https://github.com/romainPrignon/std/commit/43ffacc05fae3ed499efa678da0274162d510aa0)]


<a name="4.1.0"></a>
## 4.1.0 (2024-07-06)

### Miscellaneous

- 🏷️ Put types where they belong [[9a13414](https://github.com/romainPrignon/std/commit/9a13414c599e47ba40ffe8434fb4f178ea2d4ef1)]


