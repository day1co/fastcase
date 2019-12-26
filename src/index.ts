import CaseConverter from './case-converter';
import CaseKeysConverter from './case-keys-converter';
import SnakeCase from './snake-case';
import CamelCase from './camel-case';
import { memoize } from './memoize';

export const snakeCase = SnakeCase.create();

export const camelCase = CamelCase.create();

export const toCamelCase = snakeCase.toCamelCase;

/**
 * with cache,
 * convert the given **snake_case** string to a camelCase string,
 */
export const toCamelCaseFast = memoize(snakeCase.toCamelCase);

export const toSnakeCase = camelCase.toSnakeCase;

/**
 * with cache,
 * convert the given **camelCase** string to a snake_case string.
 */
export const toSnakeCaseFast = memoize(camelCase.toSnakeCase);

/**
 * return case keys converter function using the given case string converter function.
 */
export const toCaseKeysFn = (caseConverter: CaseConverter): CaseKeysConverter => {
  const toCaseKeys = (obj: any): any => {
    if (Array.isArray(obj)) {
      return obj.map(toCaseKeys);
    }
    if (typeof obj === 'object' && obj !== null) {
      const result = Object.create(null);
      for (const [key, value] of Object.entries(obj)) {
        result[caseConverter(key)] = value;
      }
      return result;
    }
    return obj;
  };
  return toCaseKeys;
};

/**
 * convert object with snake_case keys to object with camelCase keys.
 */
export const toCamelCaseKeys = toCaseKeysFn(toCamelCaseFast);

/**
 * convert object with camelCase keys to object with snake_case keys.
 */
export const toSnakeCaseKeys = toCaseKeysFn(toSnakeCaseFast);
