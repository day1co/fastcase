import { toSnakeCase } from './CamelCase';

describe('CamelCase', () => {
  describe('toSnakeCase', () => {
    test('edge', () => {
      expect(toSnakeCase(undefined)).toBeUndefined();
      expect(toSnakeCase(null)).toBeNull();
      expect(toSnakeCase('')).toEqual('');
    });
    test('non string', () => {
      expect(toSnakeCase(123)).toEqual(123);
      expect(toSnakeCase(123.456)).toEqual(123.456);
      expect(toSnakeCase([])).toEqual([]);
      expect(toSnakeCase({})).toEqual({});
    });
    test('camel case', () => {
      expect(toSnakeCase('fooBarBaz')).toEqual('foo_bar_baz');
      expect(toSnakeCase('atByOf')).toEqual('at_by_of');
      expect(toSnakeCase('withForAt')).toEqual('with_for_at');
    });
    test('snake case', () => {
      expect(toSnakeCase('foo_bar_baz')).toEqual('foo_bar_baz');
      expect(toSnakeCase('at_by_of')).toEqual('at_by_of');
      expect(toSnakeCase('with_for_at')).toEqual('with_for_at');
    });
    test.skip('pascal case', () => {
      expect(toSnakeCase('FooBarBaz')).toEqual('foo_bar_baz');
      expect(toSnakeCase('AtByOf')).toEqual('at_by_of');
    });
    test.skip('kebab case', () => {
      expect(toSnakeCase('foo-bar-baz')).toEqual('foo_bar_baz');
      expect(toSnakeCase('at-by-of')).toEqual('at_by_of');
    });
    test.skip('cobol case', () => {
      expect(toSnakeCase('FOO-BAR-BAZ')).toEqual('foo_bar_baz');
      expect(toSnakeCase('AT-BY-OF')).toEqual('at_by_of');
    });
    test.skip('macro case', () => {
      expect(toSnakeCase('FOO_BAR_BAZ')).toEqual('foo_bar_baz');
      expect(toSnakeCase('AT_BY_OF')).toEqual('at_by_of');
    });
    test.skip('lower case', () => {
      expect(toSnakeCase('foo bar baz')).toEqual('foo_bar_baz');
      expect(toSnakeCase('at by of')).toEqual('at_by_of');
    });
    test.skip('upper case', () => {
      expect(toSnakeCase('FOO BAR BAZ')).toEqual('foo_bar_baz');
      expect(toSnakeCase('AT BY OF')).toEqual('at_by_of');
    });
    test('with number', () => {
      expect(toSnakeCase('utf8Encoding')).toEqual('utf8_encoding');
      expect(toSnakeCase('8daysAgo')).toEqual('8days_ago');
      expect(toSnakeCase('8DaysAgo')).toEqual('8_days_ago');
      expect(toSnakeCase('imageUrl2')).toEqual('image_url2');
      expect(toSnakeCase('I18N')).toEqual('i18_n');
      expect(toSnakeCase('i18N')).toEqual('i18_n');
      expect(toSnakeCase('i18n')).toEqual('i18n');
    });
  });
});
