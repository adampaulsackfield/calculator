# Calculator

## Requirements

1. A deployed website (using GitHub Pages) ✅
2. A public GitHub repository for your codebase ✅
3. A README.md with a short intro to the project ✅
4. At least 15 Git commits for the different stages in your development ✅
5. Be responsive and built mobile-first, it should work on different screen widths ✅
6. Accept a minimum of 2 inputs, perform an operation and show the output ✅
7. DOES NOT USE THE eval() method (as this is extremely dangerous) ✅
8. Code is highly readable (good naming and indented correctly) ✅

## Approach

When planning this project and playing around in JSFiddle, I came up with three approaches I would like explore, which you can view [here](https://github.com/adampaulsackfield/calculator/blob/main/test-code.md). In the end I went with the fourth method, which see the previous linked file for further details on the approach taken.

## Features

- [✅] Simple Calculations (Two numbers and one operator).
- [✅] Complex Calculations (Multiple operators, respects the order of operations by implementing the [Shunting Yard Algorithm](https://en.wikipedia.org/wiki/Shunting-yard_algorithm)). 🤯
- [✅] Ability to undo with the implementation of a custom state manager. 🤯
- [✅] Reset functionality. Like AC button on most calculators.
- [✅] Light and Dark Modes Available.
- [✅] Responsive for Mobile, Tablet and Desktop.
- [✅] Quickly convert percent to decimal.
- [✅] Ability to use `+/-` button.
- [✅] Ability to work with floats.
- [✅] Scientific calculator functions
- [❌] Can include brackets in expressions

## Testing

### Unit Tests

- [✅] convertToPostfix function
- [✅] evaluatePostfix function

### E2E Tests

- [✅] Test inputting numbers
- [✅] Test inputting operators
- [✅] Test simple expressions
- [✅] Test complex expressions
- [✅] Test Exponent Functions
