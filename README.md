# An intro to property-based testing with JSVerify

https://github.com/jsverify/jsverify

## Summary

The examples contained in this repo were inspired (blatanly copied) from [Pedro Vasconcelos's introduction to QuickCheck testing article](https://www.fpcomplete.com/user/pbv/an-introduction-to-quickcheck-testing) and [Hardy Jones' Property Based Testing presentation](https://speakerdeck.com/joneshf/property-based-testing).

This repo is broken up into different branches to walk through the various stages step by step.

### Step 1 - Intro
`npm install`
`git checkout test-stubs`
Have a look at the two features that will be implemented
`npm test` -- ensure the test suite runs with no errors

### Step 2 - Initial implementation of `split`
`git checkout split-impl`
Have a look at the implementation of `split` and the updated tests
`npm test` -- ensure the tests currently pass

### Step 3 - Property tests for `split`
`git checkout split-props`
Have a look at the new property tests added to `split.test.js`
`npm test` -- note you probably now have a failing test caught by JSVerify

### Step 4 - Fix the implementation of `split`
`git diff split-props fix-split` -- note the changes required to fix
`git checkout fix-split`
`npm test` -- ensure the tests now pass again

### Step 5 - Implement `validate`
`git checkout validate`
Have a look at the implementation

### Step 6 - Property tests for `validate`
`git checkout validate-props`
Have a look at the tests for `validate` and how the arbitrary values are declared
`npm test` -- ensure the tests pass

