import CamelCase from '../src/camel-case';

describe('camel-case', () => {
  const camelCase = CamelCase.create();
  describe('camelCase.toSnakeCase', () => {
    it('edge', () => {
      expect(camelCase.toSnakeCase(undefined)).toBeUndefined();
      expect(camelCase.toSnakeCase(null)).toBeNull();
      expect(camelCase.toSnakeCase('')).toEqual('');
    });
    it('non string', () => {
      expect(camelCase.toSnakeCase(123)).toEqual(123);
      expect(camelCase.toSnakeCase(123.456)).toEqual(123.456);
      expect(camelCase.toSnakeCase([])).toEqual([]);
      expect(camelCase.toSnakeCase({})).toEqual({});
    });
    it('camel case', () => {
      expect(camelCase.toSnakeCase('fooBarBaz')).toEqual('foo_bar_baz');
    });
    it('snake case', () => {
      expect(camelCase.toSnakeCase('foo_bar_baz')).toEqual('foo_bar_baz');
    });
    xit('FIXME: pascal case', () => {
      // FIXME: expect(camelCase.toSnakeCase('FooBarBaz')).toEqual( 'FooBarBaz');
      expect(camelCase.toSnakeCase('FooBarBaz')).toEqual('foo_bar_baz');
    });
    it('kebab case', () => {
      expect(camelCase.toSnakeCase('foo-bar-baz')).toEqual('foo-bar-baz');
    });
    it('cobol case', () => {
      expect(camelCase.toSnakeCase('FOO-BAR-BAZ')).toEqual('FOO-BAR-BAZ');
    });
    it('upper case', () => {
      expect(camelCase.toSnakeCase('FOO_BAR_BAZ')).toEqual('FOO_BAR_BAZ');
    });
    it('with number', () => {
      expect(camelCase.toSnakeCase('utf8Encoding')).toEqual('utf8_encoding');
      expect(camelCase.toSnakeCase('8daysAgo')).toEqual('8days_ago');
      expect(camelCase.toSnakeCase('8DaysAgo')).toEqual('8_days_ago');
      expect(camelCase.toSnakeCase('imageUrl2')).toEqual('image_url2');
      expect(camelCase.toSnakeCase('I18N')).toEqual('I18N');
    });
  });
});
