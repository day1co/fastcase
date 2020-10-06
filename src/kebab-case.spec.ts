import { toMacroCase } from './kebab-case';

describe('kebab-case', () => {
  describe('toMacroCase', () => {
    test('edge', () => {
      expect(toMacroCase(undefined)).toBeUndefined();
      expect(toMacroCase(null)).toBeNull();
      expect(toMacroCase('')).toEqual('');
    });
    test('non string', () => {
      expect(toMacroCase(123)).toEqual(123);
      expect(toMacroCase(123.456)).toEqual(123.456);
      expect(toMacroCase([])).toEqual([]);
      expect(toMacroCase({})).toEqual({});
    });
    test.skip('camel case', () => {
      expect(toMacroCase('fooBarBaz')).toEqual('FOO_BAR_BAZ');
      expect(toMacroCase('atByOf')).toEqual('AT_BY_OF');
      expect(toMacroCase('withForAt')).toEqual('WITH_FOR_AT');
    });
    test.skip('snake case', () => {
      expect(toMacroCase('foo_bar_baz')).toEqual('FOO_BAR_BAZ');
      expect(toMacroCase('at_by_of')).toEqual('AT_BY_OF');
      expect(toMacroCase('with_for_at')).toEqual('WITH_FOR_AT');
    });
    test.skip('pascal case', () => {
      expect(toMacroCase('FooBarBaz')).toEqual('FOO_BAR_BAZ');
      expect(toMacroCase('AtByOf')).toEqual('AT_BY_OF');
    });
    test('kebab case', () => {
      expect(toMacroCase('foo-bar-baz')).toEqual('FOO_BAR_BAZ');
      expect(toMacroCase('at-by-of')).toEqual('AT_BY_OF');
    });
    test.skip('cobol case', () => {
      expect(toMacroCase('FOO-BAR-BAZ')).toEqual('FOO_BAR_BAZ');
      expect(toMacroCase('AT-BY-OF')).toEqual('AT_BY_OF');
    });
    test('macro case', () => {
      expect(toMacroCase('FOO_BAR_BAZ')).toEqual('FOO_BAR_BAZ');
      expect(toMacroCase('AT_BY_OF')).toEqual('AT_BY_OF');
    });
    test.skip('lower case', () => {
      expect(toMacroCase('foo bar baz')).toEqual('FOO_BAR_BAZ');
      expect(toMacroCase('at by of')).toEqual('AT_BY_OF');
    });
    test.skip('upper case', () => {
      expect(toMacroCase('FOO BAR BAZ')).toEqual('FOO_BAR_BAZ');
      expect(toMacroCase('AT BY OF')).toEqual('AT_BY_OF');
    });
    test.skip('with number', () => {
      expect(toMacroCase('utf8Encoding')).toEqual('UTF8_ENCODING');
      expect(toMacroCase('8daysAgo')).toEqual('8DAYS_AGO');
      expect(toMacroCase('8DaysAgo')).toEqual('8_DAYS_AGO');
      expect(toMacroCase('imageUrl2')).toEqual('IMAGE_URL2');
      expect(toMacroCase('I18N')).toEqual('I18N');
      expect(toMacroCase('i18N')).toEqual('I18_N');
      expect(toMacroCase('i18n')).toEqual('I18N');
    });
  });
});
