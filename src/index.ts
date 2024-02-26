import { toSnakeCase } from './camel-case';
import { createCaseKeysConverter } from './case-keys-converter';
import { createFastCaseConverter } from './fast-case-converter';
import { toKebabCase } from './kebab-case';
import { toCamelCase } from './snake-case';

// re-export
export { toSnakeCase, toCamelCase, toKebabCase };

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

/**
 * with cache,
 * convert the given **any case** string to a kebab-case string,
 */
export const toKebabCaseFast = createFastCaseConverter(toKebabCase);

/**
 * with cache,
 * convert object with any case keys to object with kebab-case keys.
 */
export const toKebabCaseKeys = createCaseKeysConverter(toKebabCaseFast);
