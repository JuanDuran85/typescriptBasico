## Jest (unit test)

1. Install dependencies
   ```bash
   npm i -D jest typescript ts-node ts-jest @types/node @types/jest
   ```
2. Create a config file for jest
   ```bash
   npx ts-jest config:init
   ```
   Next, change the extension file to ts
   Next, change the content on the config file

3. Create a config file for TS


## F.I.R.S.T principles
These are principles, not rules, that we can follow when writing tests:
 - Fast: Unit test should be fast, faster tests, faster feedback.
 - Independent: Unit test should be isoleted from one another, external environment.
 - Repeatable: Same result with the same input.  
 - Self-validating: After the test completes, it's results are cleare.
 - Thorough: Cover all the cases, paths, scenarios, happy, bad and edge cases.

## Test Properties
1. only: This property is used to run only the specified test case or test suite while ignoring all other tests. This can be useful during development when you want to focus on a particular test case.
2. skip: This property is used to skip a particular test case or test suite without actually running it. This can be useful when you temporarily want to disable a test that is currently failing or not relevant.
3. todo: This property is used to mark a test case or test suite as "pending" or "to do", which means that it has not been implemented yet but will be at some point in the future. This can be useful when you're writing tests as part of a TDD (Test-Driven Development) approach.
4. concurrent: This property is used to run a test suite with multiple test cases concurrently, which can improve the overall test execution time. This can be particularly useful when you have a large number of test cases to run and want to speed up the test execution process.

## Test Aliases
- it: This is the default Jest test function, and it's used to define a new test case. It takes two arguments: a string describing the test case, and a function containing the test code.
- test: This is an alias for the it function, and can be used interchangeably. It's provided for convenience, and some developers may prefer to use test instead of it.
- xit: This is an alias for the it function with the skip method applied. It's used to temporarily skip a test case without actually running it. This can be useful when you're debugging or when you need to temporarily disable a test case.
- fit: This is an alias for the it function with the only method applied. It's used to run only the specified test case while ignoring all other tests. This can be useful when you're working on a particular test case and want to focus on that one test without running all the other tests.

