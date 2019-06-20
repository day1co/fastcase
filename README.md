fastcase
========

fast and simple camel/snake case converter

## Getting Started

```js
const { toCameCaseFast, toSnakeCaseFast, toCamelCaseKeys, toSnakeCaseKeys } = require('@fastcampus/fastcase');

console.log(toCameCaseFast('foo_bar_baz_qux'));
// fooBarBazQux

console.log(toSnakeCaseFast('fooBarBazQux'));
// foo_bar_baz_qux

console.log(toCamelCaseKeys({ foo_bar:'hello', baz_qux: 'world' }));
// { fooBar: 'hello', bazQux: 'world' }

console.log(toSnakeCaseKeys({ fooBar:'hello', bazQux: 'world' }));
// { foo_bar: 'hello', baz_qux: 'world' }
```

## Contributing

### lint

```console
$ npm run lint
```

### test

```console
$ npm run test
```

### test with coverage

```console
$ npm run coverage
```

may the **SOURCE** be with you...

