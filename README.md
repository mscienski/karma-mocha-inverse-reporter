# Inverse Mocha Reporter for Karma
A 

## Lint
`npm run lint` will run eslint.

## Tests
`npm run test` will run Karma with the mocha-inverse-reporter. Note that failing tests are here on purpose, to demonstrate the reporter output.

## Build
`npm run build` will transpile the reporter, running it through babel for any necessary transforms, based on `babel-preset-env` set to `"node": "6.11"`