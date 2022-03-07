import { toSnakeCase } from './CamelCase';
import { toCamelCase } from './SnakeCase';
import { createFastCaseConverter } from './FastCaseConverter';
import { createCaseKeysConverter } from './CaseKeysConverter';

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
