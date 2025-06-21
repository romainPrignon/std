# General Coding Guidelines

- **Import directories, not files**: When importing modules, prefer importing from the directory index file rather than a specific file within the directory. This makes refactoring easier.
  ```typescript
  // Good
  import { something } from '../module';
  // Bad
  import { something } from '../module/something';
  ```
- **Prefer types over defensive programming**: Utilize TypeScript's type system to ensure correctness rather than relying on runtime checks.
  ```typescript
  // Good - Use types for clarity and compile-time checks
  function processData(data: ValidatedData) {
    // ...
  }

  // Bad - Avoid excessive runtime checks if types can guarantee correctness
  function processData(data: any) {
    if (!data || typeof data !== 'object' || !data.hasOwnProperty('requiredField')) {
      throw new Error('Invalid data');
    }
    // ...
  }
  ```
- **Keep standard function signatures**: Adhere to common function signature patterns as much as possible to maintain consistency and predictability.
- **Follow project conventions**: Be mindful of existing coding patterns and conventions within the codebase.

# Code Generation

These rules apply when generating new code or modifying existing code:

1.  **Write Tests**:
    *   All new features or bug fixes should be accompanied by tests.
    *   Ensure all existing tests pass before submitting changes.
    *   Aim for good test coverage, including unit tests and integration tests where appropriate.
2.  **Update Changelog**: For any significant user-facing changes, update `CHANGELOG.md` following the existing format.
3.  **Commit Messages**:
    *   Use [Gitmoji](https://gitmoji.dev/) to prefix your commit messages.
    *   Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. Example: `:sparkles: feat: Implement user authentication`.

# Code Review

These rules apply when reviewing code:

1.  **Identify Potential Issues**:
    *   Look for bugs, edge cases, and potential performance bottlenecks.
    *   Ensure proper error handling and consider concurrency, parallelism, and breaking changes.
2.  **Adherence to Guidelines**: Verify that the changes adhere to the project's coding guidelines and conventions (see "General Coding Guidelines" above).
3.  **Code Quality**:
    *   Suggest optimizations for performance (execution speed, then resource consumption).
    *   Identify security concerns.
    *   Highlight opportunities for refactoring and improving code clarity.
4.  **Test Coverage**: Ensure that the changes are adequately tested and point out areas that might need more testing.
