import { toKebabCase } from './kebab-case';

describe('kebab-case', () => {
  describe('toKebabCase', () => {
    test('edge', () => {
      expect(toKebabCase(undefined)).toBeUndefined();
      expect(toKebabCase(null)).toBeNull();
      expect(toKebabCase('')).toEqual('');
    });
    test('non string', () => {
      expect(toKebabCase(123)).toEqual(123);
      expect(toKebabCase(123.456)).toEqual(123.456);
      expect(toKebabCase([])).toEqual([]);
      expect(toKebabCase({})).toEqual({});
    });
    test('basic case', () => {
      expect(toKebabCase('foo_bar_baz')).toEqual('foo-bar-baz');
      expect(toKebabCase('foo__bar__baz')).toEqual('foo-bar-baz');
      expect(toKebabCase('atByOf')).toEqual('at-by-of');
      expect(toKebabCase('at__by__of')).toEqual('at-by-of');
      expect(toKebabCase('with_for_at')).toEqual('with-for-at');
    });
    test('camel case', () => {
      expect(toKebabCase('fooBarBaz')).toEqual('foo-bar-baz');
      expect(toKebabCase('atByOf')).toEqual('at-by-of');
      expect(toKebabCase('withForAt')).toEqual('with-for-at');
    });
    test('pascal case', () => {
      expect(toKebabCase('FooBarBaz')).toEqual('foo-bar-baz');
      expect(toKebabCase('AtByOf')).toEqual('at-by-of');
    });
    test('kebab case', () => {
      expect(toKebabCase('foo-bar-baz')).toEqual('foo-bar-baz');
      expect(toKebabCase('foo--bar--baz')).toEqual('foo-bar-baz');
      expect(toKebabCase('at-by-of')).toEqual('at-by-of');
      expect(toKebabCase('at--by--of')).toEqual('at-by-of');
    });
    test('cobol case', () => {
      expect(toKebabCase('FOO-BAR-BAZ')).toEqual('foo-bar-baz');
      expect(toKebabCase('FOO--BAR--BAZ')).toEqual('foo-bar-baz');
      expect(toKebabCase('AT-BY-OF')).toEqual('at-by-of');
      expect(toKebabCase('AT--BY--OF')).toEqual('at-by-of');
    });
    test('macro case', () => {
      expect(toKebabCase('FOO_BAR_BAZ')).toEqual('foo-bar-baz');
      expect(toKebabCase('FOO__BAR__BAZ')).toEqual('foo-bar-baz');
      expect(toKebabCase('AT_BY_OF')).toEqual('at-by-of');
      expect(toKebabCase('AT__BY__OF')).toEqual('at-by-of');
    });
    test('upper case', () => {
      expect(toKebabCase('FOO BAR BAZ')).toEqual('foo-bar-baz');
      expect(toKebabCase('FOO  BAR  BAZ')).toEqual('foo-bar-baz');
      expect(toKebabCase('AT BY OF')).toEqual('at-by-of');
      expect(toKebabCase('AT  BY  OF')).toEqual('at-by-of');
    });
    test('lower case', () => {
      expect(toKebabCase('foo bar baz')).toEqual('foo-bar-baz');
      expect(toKebabCase('foo  bar  baz')).toEqual('foo-bar-baz');
      expect(toKebabCase('at by of')).toEqual('at-by-of');
      expect(toKebabCase('at  by  of')).toEqual('at-by-of');
    });
    test('with number', () => {
      expect(toKebabCase('utf8_encoding')).toEqual('utf8-encoding');
      expect(toKebabCase('utf_8_encoding')).toEqual('utf-8-encoding');
      expect(toKebabCase('8days_ago')).toEqual('8days-ago');
      expect(toKebabCase('8_days_ago')).toEqual('8-days-ago');
      expect(toKebabCase('image_url_2')).toEqual('image-url-2');
      expect(toKebabCase('image_url2')).toEqual('image-url2');
      expect(toKebabCase('i18_n')).toEqual('i18-n');
      expect(toKebabCase('i18n')).toEqual('i18n');
      expect(toKebabCase('I18N')).toEqual('i18-n');
      expect(toKebabCase('I18n')).toEqual('i18n');
    });
  });
});
