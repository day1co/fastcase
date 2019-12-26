import { toSnakeCase } from './camel-case';
import { toCamelCase } from './snake-case';
export { toSnakeCase, toCamelCase };
/**
 * with cache,
 * convert the given **camelCase** string to a snake_case string.
 */
export declare const toSnakeCaseFast: import("./case-converter").default;
/**
 * with cache,
 * convert object with camelCase keys to object with snake_case keys.
 */
export declare const toSnakeCaseKeys: import("./case-keys-converter").default;
/**
 * with cache,
 * convert the given **snake_case** string to a camelCase string,
 */
export declare const toCamelCaseFast: import("./case-converter").default;
/**
 * with cache,
 * convert object with snake_case keys to object with camelCase keys.
 */
export declare const toCamelCaseKeys: import("./case-keys-converter").default;
