fastcase
========

fast and simple camel/snake/kebab case converter

![version](https://img.shields.io/github/package-json/v/day1co/fastcase)

## Getting Started

```js
const { toCameCaseFast, toSnakeCaseFast, toKebabCaseFast } = require('@day1co/fastcase');
const { toCamelCaseKeys, toSnakeCaseKeys, toKebabCaseKeys } = require('@day1co/fastcase');

console.log(toCameCaseFast('foo_bar_baz_qux'));
// fooBarBazQux

console.log(toSnakeCaseFast('fooBarBazQux'));
// foo_bar_baz_qux

console.log(toKebabCaseFast('fooBarBazQux'));
// foo-bar-baz-qux

console.log(toCamelCaseKeys({ foo_bar:'hello', baz_qux: 'world' }));
// { fooBar: 'hello', bazQux: 'world' }

console.log(toSnakeCaseKeys({ fooBar:'hello', bazQux: 'world' }));
// { foo_bar: 'hello', baz_qux: 'world' }

console.log(toKebabCaseKeys({ fooBar:'hello', bazQux: 'world' }));
// { foo-bar: 'hello', baz-qux: 'world' }
```

## Contributing

### test

```console
$ npm test
```

### build

```console
$ npm run build
```

### watch(continuous build)

```console
$ npm start
```

---
may the **SOURCE** be with you...

