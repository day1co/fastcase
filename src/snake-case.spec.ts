import { toCamelCase } from './snake-case';
import { toSnakeCase } from './camel-case';

describe('snake-case', () => {
  describe('toCamelCase', () => {
    test('edge', () => {
      expect(toCamelCase(undefined)).toBeUndefined();
      expect(toCamelCase(null)).toBeNull();
      expect(toCamelCase('')).toEqual('');
    });
    test('non string', () => {
      expect(toCamelCase(123)).toEqual(123);
      expect(toCamelCase(123.456)).toEqual(123.456);
      expect(toCamelCase([])).toEqual([]);
      expect(toCamelCase({})).toEqual({});
    });
    test('snake case', () => {
      expect(toCamelCase('foo_bar_baz')).toEqual('fooBarBaz');
      expect(toCamelCase('foo__bar__baz')).toEqual('fooBarBaz');
      expect(toCamelCase('at_by_of')).toEqual('atByOf');
      expect(toCamelCase('at__by__of')).toEqual('atByOf');
      expect(toCamelCase('with_for_at')).toEqual('withForAt');
    });
    test.skip('camel case', () => {
      expect(toCamelCase('fooBarBaz')).toEqual('fooBarBaz');
      expect(toCamelCase('atByOf')).toEqual('atByOf');
      expect(toCamelCase('withForAt')).toEqual('withForAt');
    });
    test.skip('pascal case', () => {
      expect(toCamelCase('FooBarBaz')).toEqual('fooBarBaz');
      expect(toCamelCase('AtByOf')).toEqual('atByOf');
    });
    test.skip('kebab case', () => {
      expect(toCamelCase('foo-bar-baz')).toEqual('fooBarBaz');
      expect(toCamelCase('foo--bar--baz')).toEqual('fooBarBaz');
      expect(toCamelCase('at-by-of')).toEqual('atByOf');
      expect(toCamelCase('at--by--of')).toEqual('atByOf');
    });
    test.skip('cobol case', () => {
      expect(toCamelCase('FOO-BAR-BAZ')).toEqual('fooBarBaz');
      expect(toCamelCase('FOO--BAR--BAZ')).toEqual('fooBarBaz');
      expect(toCamelCase('AT-BY-OF')).toEqual('atByOf');
      expect(toCamelCase('AT--BY--OF')).toEqual('atByOf');
    });
    test.skip('macro case', () => {
      expect(toCamelCase('FOO_BAR_BAZ')).toEqual('fooBarBaz');
      expect(toCamelCase('FOO__BAR__BAZ')).toEqual('fooBarBaz');
      expect(toCamelCase('AT_BY_OF')).toEqual('atByOf');
      expect(toCamelCase('AT__BY__OF')).toEqual('atByOf');
    });
    test.skip('upper case', () => {
      expect(toCamelCase('FOO BAR BAZ')).toEqual('fooBarBaz');
      expect(toCamelCase('FOO  BAR  BAZ')).toEqual('fooBarBaz');
      expect(toCamelCase('AT BY OF')).toEqual('atByOf');
      expect(toCamelCase('AT  BY  OF')).toEqual('atByOf');
    });
    test.skip('lower case', () => {
      expect(toCamelCase('foo bar baz')).toEqual('fooBarBaz');
      expect(toCamelCase('foo  bar  baz')).toEqual('fooBarBaz');
      expect(toCamelCase('at by of')).toEqual('atByOf');
      expect(toCamelCase('at  by  of')).toEqual('atByOf');
    });
    test('with number', () => {
      expect(toCamelCase('utf8_encoding')).toEqual('utf8Encoding');
      expect(toCamelCase('utf_8_encoding')).toEqual('utf_8Encoding');
      expect(toCamelCase('8days_ago')).toEqual('8daysAgo');
      expect(toCamelCase('8_days_ago')).toEqual('8DaysAgo');
      expect(toCamelCase('image_url_2')).toEqual('imageUrl_2');
      expect(toCamelCase('image_url2')).toEqual('imageUrl2');
      expect(toCamelCase('i18_n')).toEqual('i18N');
      expect(toCamelCase('i18n')).toEqual('i18n');
      expect(toCamelCase('I18N')).toEqual('I18N');
      expect(toCamelCase('I18n')).toEqual('I18n');
    });
  });
});
