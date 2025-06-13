# String Calculator - TDD Kata

[![Test Status](https://github.com/sayyedfaisal06/incubyte-tdd/actions/workflows/tests.yml/badge.svg)](https://github.com/sayyedfaisal06/incubyte-tdd/actions)

This is my implementation of the String Calculator kata using Test-Driven Development (TDD) in TypeScript.

## Current Implementation Status

### Completed Features  
- [X] Initial Project  
- [ ] Empty string returns 0  
- [ ] Single number returns the value  
- [ ] Two numbers, comma delimited, returns the sum  
- [ ] Two numbers, newline delimited, returns the sum  
- [ ] Three numbers delimited either way returns the sum  
- [ ] Negative numbers throw an exception  
- [ ] Numbers greater than 1000 are ignored  
- [ ] Single character delimiter can be defined on the first line  
- [ ] Multi-character delimiter can be defined on the first line  
- [ ] Many single or multi-char delimiters can be defined  

## Running Tests

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development: `npm run dev`
4. Run tests: `npm test`
