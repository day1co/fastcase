import SnakeCase from '../src/snake-case';

describe('snake-case', () => {
  const snakeCase = SnakeCase.create();
  describe('toCamelCase', () => {
    test('edge', () => {
      expect(snakeCase.toCamelCase(undefined)).toBeUndefined();
      expect(snakeCase.toCamelCase(null)).toBeNull();
      expect(snakeCase.toCamelCase('')).toEqual('');
    });
    test('non string', () => {
      expect(snakeCase.toCamelCase(123)).toEqual(123);
      expect(snakeCase.toCamelCase(123.456)).toEqual(123.456);
      expect(snakeCase.toCamelCase([])).toEqual([]);
      expect(snakeCase.toCamelCase({})).toEqual({});
    });
    test('snake case', () => {
      expect(snakeCase.toCamelCase('foo_bar_baz')).toEqual('fooBarBaz');
    });
    test('camel case', () => {
      expect(snakeCase.toCamelCase('fooBarBaz')).toEqual('fooBarBaz');
    });
    test('pascal case', () => {
      expect(snakeCase.toCamelCase('FooBarBaz')).toEqual('FooBarBaz');
    });
    test('kebab case', () => {
      expect(snakeCase.toCamelCase('foo-bar-baz')).toEqual('foo-bar-baz');
    });
    test('cobol case', () => {
      expect(snakeCase.toCamelCase('FOO-BAR-BAZ')).toEqual('FOO-BAR-BAZ');
    });
    test('upper case', () => {
      expect(snakeCase.toCamelCase('FOO_BAR_BAZ')).toEqual('FOO_BAR_BAZ');
    });
    test('with number', () => {
      expect(snakeCase.toCamelCase('utf8_encoding')).toEqual('utf8Encoding');
      expect(snakeCase.toCamelCase('utf_8_encoding')).toEqual('utf8Encoding');
      expect(snakeCase.toCamelCase('8days_ago')).toEqual('8daysAgo');
      expect(snakeCase.toCamelCase('8_days_ago')).toEqual('8DaysAgo');
      expect(snakeCase.toCamelCase('image_url_2')).toEqual('imageUrl2');
      expect(snakeCase.toCamelCase('image_url2')).toEqual('imageUrl2');
      expect(snakeCase.toCamelCase('I18N')).toEqual('I18N');
    });
  });
});
