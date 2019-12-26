import { toSnakeCase } from './camel-case';
import { toCamelCase } from './snake-case';
import { createFastCaseConverter } from './fast-case-converter';
import { createCaseKeysConverter } from './case-keys-converter';

// re-export
export { toSnakeCase, toCamelCase };

/**
 * with cache,
 * convert the given **camelCase** string to a snake_case string.
 */
export const toSnakeCaseFast = createFastCaseConverter(toSnakeCase);

/**
 * with cache,
 * convert object with camelCase keys to object with snake_case keys.
 */
export const toSnakeCaseKeys = createCaseKeysConverter(toSnakeCaseFast);

/**
 * with cache,
 * convert the given **snake_case** string to a camelCase string,
 */
export const toCamelCaseFast = createFastCaseConverter(toCamelCase);

/**
 * with cache,
 * convert object with snake_case keys to object with camelCase keys.
 */
export const toCamelCaseKeys = createCaseKeysConverter(toCamelCaseFast);
