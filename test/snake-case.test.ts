import SnakeCase from '../src/snakecase';

describe('fastcase', () => {
  const snakeCase = SnakeCase.create();
  describe('toCamelCase', () => {
    test('edge', () => {
      expect(snakeCase.toCamelCase()).to.be.undefined;
      expect(snakeCase.toCamelCase(null)).to.be.null;
      expect(snakeCase.toCamelCase('')).to.equal('');
    });
    test('non string', () => {
      expect(toCamelCase(123)).to.equal(123);
      expect(toCamelCase(123.456)).to.equal(123.456);
      expect(toCamelCase([])).to.deep.equal([]);
      expect(toCamelCase({})).to.deep.equal({});
    });
    test('snake case', () => {
      expect(toCamelCase('foo_bar_baz')).to.equal('fooBarBaz');
    });
    test('camel case', () => {
      expect(toCamelCase('fooBarBaz')).to.equal('fooBarBaz');
    });
    test('pascal case', () => {
      expect(toCamelCase('FooBarBaz')).to.equal('FooBarBaz');
    });
    test('kebab case', () => {
      expect(toCamelCase('foo-bar-baz')).to.equal('foo-bar-baz');
    });
    test('cobol case', () => {
      expect(toCamelCase('FOO-BAR-BAZ')).to.equal('FOO-BAR-BAZ');
    });
    test('upper case', () => {
      expect(toCamelCase('FOO_BAR_BAZ')).to.equal('FOO_BAR_BAZ');
    });
    test('with number', () => {
      expect(toCamelCase('utf8_encoding')).to.equal('utf8Encoding');
      expect(toCamelCase('utf_8_encoding')).to.equal('utf8Encoding');
      expect(toCamelCase('8days_ago')).to.equal('8daysAgo');
      expect(toCamelCase('8_days_ago')).to.equal('8DaysAgo');
      expect(toCamelCase('image_url_2')).to.equal('imageUrl2');
      expect(toCamelCase('image_url2')).to.equal('imageUrl2');
      expect(toCamelCase('I18N')).to.equal('I18N');
    });
  });

  describe('toSnakeCase', () => {
    test('edge', () => {
      expect(toSnakeCase()).to.be.undefined;
      expect(toSnakeCase(null)).to.be.null;
      expect(toSnakeCase('')).to.equal('');
    });
    test('non string', () => {
      expect(toSnakeCase(123)).to.equal(123);
      expect(toSnakeCase(123.456)).to.equal(123.456);
      expect(toSnakeCase([])).to.deep.equal([]);
      expect(toSnakeCase({})).to.deep.equal({});
    });
    test('camel case', () => {
      expect(toSnakeCase('fooBarBaz')).to.equal('foo_bar_baz');
    });
    test('snake case', () => {
      expect(toSnakeCase('foo_bar_baz')).to.equal('foo_bar_baz');
    });
    xtest('FIXME: pascal case', () => {
      // FIXME: expect(toSnakeCase('FooBarBaz')).to.equal( 'FooBarBaz');
      expect(toSnakeCase('FooBarBaz')).to.equal('foo_bar_baz');
    });
    test('kebab case', () => {
      expect(toSnakeCase('foo-bar-baz')).to.equal('foo-bar-baz');
    });
    test('cobol case', () => {
      expect(toSnakeCase('FOO-BAR-BAZ')).to.equal('FOO-BAR-BAZ');
    });
    test('upper case', () => {
      expect(toSnakeCase('FOO_BAR_BAZ')).to.equal('FOO_BAR_BAZ');
    });
    test('with number', () => {
      expect(toSnakeCase('utf8Encoding')).to.equal('utf8_encoding');
      expect(toSnakeCase('8daysAgo')).to.equal('8days_ago');
      expect(toSnakeCase('8DaysAgo')).to.equal('8_days_ago');
      expect(toSnakeCase('imageUrl2')).to.equal('image_url2');
      expect(toSnakeCase('I18N')).to.equal('I18N');
    });
  });

  describe('toCamelCaseFast', () => {
    test('should faster than toCamelCase()', () => {
      const COUNT = 1000000;

      const start = Date.now();
      for (let i = 0; i < COUNT; i += 1) {
        toCamelCase(`foo_bar_baz_qux_${i % 100}`);
      }
      const elapsed = Date.now() - start;
      console.log(elapsed);

      const start2 = Date.now();
      for (let i = 0; i < COUNT; i += 1) {
        toCamelCaseFast(`foo_bar_baz_qux_${i % 100}`);
      }
      const elapsed2 = Date.now() - start2;
      console.log(elapsed2);

      expect(elapsed2).to.be.below(elapsed);
    });
  });

  describe('toSnakeCaseFast', () => {
    test('should faster than toSnakeCase()', () => {
      const COUNT = 1000000;

      const start = Date.now();
      for (let i = 0; i < COUNT; i += 1) {
        toSnakeCase(`fooBarBazQux${i % 100}`);
      }
      const elapsed = Date.now() - start;
      console.log(elapsed);

      const start2 = Date.now();
      for (let i = 0; i < COUNT; i += 1) {
        toSnakeCaseFast(`fooBarBazQux${i % 100}`);
      }
      const elapsed2 = Date.now() - start2;
      console.log(elapsed2);

      expect(elapsed2).to.be.below(elapsed);
    });
  });

  describe('toCaseKeysFn', () => {
    const toUpperCaseKeys = toCaseKeysFn(s => s.toUpperCase());
    test('edge', () => {
      expect(toUpperCaseKeys()).to.be.undefined;
      expect(toUpperCaseKeys(null)).to.be.null;
      expect(toUpperCaseKeys([])).to.deep.equal([]);
      expect(toUpperCaseKeys({})).to.deep.equal({});
      expect(toUpperCaseKeys(new Date())).to.deep.equal({});
    });
    test('non object', () => {
      expect(toUpperCaseKeys('')).to.equal('');
      expect(toUpperCaseKeys('fooBarBaz')).to.equal('fooBarBaz');
      expect(toUpperCaseKeys('foo_bar_baz')).to.equal('foo_bar_baz');
      expect(toUpperCaseKeys(123)).to.equal(123);
      expect(toUpperCaseKeys(123.456)).to.equal(123.456);
      expect(toUpperCaseKeys(true)).to.equal(true);
      expect(toUpperCaseKeys(false)).to.equal(false);
    });
    test('object', () => {
      expect(
        toUpperCaseKeys({
          foo_bar_baz: 'foo_bar_baz',
        })
      ).to.deep.equal({
        FOO_BAR_BAZ: 'foo_bar_baz',
      });
    });
    test('object with dup keys', () => {
      expect(
        toUpperCaseKeys({
          foo_bar_baz: 'foo_bar_baz',
          FOO_BAR_BAZ: 'fooBarBaz',
        })
      ).to.deep.equal({
        FOO_BAR_BAZ: 'fooBarBaz',
      });
    });
    test('array', () => {
      expect(
        toUpperCaseKeys([
          {
            foo_bar_baz: 'foo_bar_baz',
          },
        ])
      ).to.deep.equal([{ FOO_BAR_BAZ: 'foo_bar_baz' }]);
    });
  });

  describe('toCamelCaseKeys', () => {
    test('edge', () => {
      expect(toCamelCaseKeys()).to.be.undefined;
      expect(toCamelCaseKeys(null)).to.be.null;
      expect(toCamelCaseKeys([])).to.deep.equal([]);
      expect(toCamelCaseKeys({})).to.deep.equal({});
      expect(toCamelCaseKeys(new Date())).to.deep.equal({});
    });
    test('non object', () => {
      expect(toCamelCaseKeys('')).to.equal('');
      expect(toCamelCaseKeys('fooBarBaz')).to.equal('fooBarBaz');
      expect(toCamelCaseKeys('foo_bar_baz')).to.equal('foo_bar_baz');
      expect(toCamelCaseKeys(123)).to.equal(123);
      expect(toCamelCaseKeys(123.456)).to.equal(123.456);
      expect(toCamelCaseKeys(true)).to.equal(true);
      expect(toCamelCaseKeys(false)).to.equal(false);
    });
    test('object', () => {
      expect(
        toCamelCaseKeys({
          foo_bar_baz: 'foo_bar_baz',
        })
      ).to.deep.equal({
        fooBarBaz: 'foo_bar_baz',
      });
    });
    test('object with dup keys', () => {
      expect(
        toCamelCaseKeys({
          foo_bar_baz: 'foo_bar_baz',
          fooBarBaz: 'fooBarBaz',
        })
      ).to.deep.equal({
        fooBarBaz: 'fooBarBaz',
      });
    });
    test('array', () => {
      expect(toCamelCaseKeys([{ foo_bar_baz: 'foo_bar_baz' }])).to.deep.equal([{ fooBarBaz: 'foo_bar_baz' }]);
    });
  });

  describe('toSnakeCaseKeys', () => {
    test('edge', () => {
      expect(toSnakeCaseKeys()).to.be.undefined;
      expect(toSnakeCaseKeys(null)).to.be.null;
      expect(toSnakeCaseKeys([])).to.deep.equal([]);
      expect(toSnakeCaseKeys({})).to.deep.equal({});
      expect(toSnakeCaseKeys(new Date())).to.deep.equal({});
    });
    test('non object', () => {
      expect(toSnakeCaseKeys('')).to.equal('');
      expect(toSnakeCaseKeys('fooBarBaz')).to.equal('fooBarBaz');
      expect(toSnakeCaseKeys('foo_bar_baz')).to.equal('foo_bar_baz');
      expect(toSnakeCaseKeys(123)).to.equal(123);
      expect(toSnakeCaseKeys(123.456)).to.equal(123.456);
      expect(toSnakeCaseKeys(true)).to.equal(true);
      expect(toSnakeCaseKeys(false)).to.equal(false);
    });
    test('object', () => {
      expect(
        toSnakeCaseKeys({
          fooBarBaz: 'fooBarBaz',
        })
      ).to.deep.equal({
        foo_bar_baz: 'fooBarBaz',
      });
    });
    test('object with dup keys', () => {
      expect(
        toSnakeCaseKeys({
          fooBarBaz: 'fooBarBaz',
          foo_bar_baz: 'foo_bar_baz',
        })
      ).to.deep.equal({
        foo_bar_baz: 'foo_bar_baz',
      });
    });
    test('array', () => {
      expect(toSnakeCaseKeys([{ fooBarBaz: 'fooBarBaz' }])).to.deep.equal([{ foo_bar_baz: 'fooBarBaz' }]);
    });
  });
});
