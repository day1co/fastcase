import CaseConverter from './case-converter';
import CaseKeysConverter from './case-keys-converter';
import SnakeCase from './snake-case';
import CamelCase from './camel-case';
export declare const snakeCase: SnakeCase;
export declare const toCamelCase: CaseConverter;
/**
 * with cache,
 * convert the given **snake_case** string to a camelCase string,
 */
export declare const toCamelCaseFast: (s: string) => any;
export declare const camelCase: CamelCase;
export declare const toSnakeCase: CaseConverter;
/**
 * with cache,
 * convert the given **camelCase** string to a snake_case string.
 */
export declare const toSnakeCaseFast: (s: string) => any;
/**
 * return case keys converter function using the given case string converter function.
 */
export declare const toCaseKeysFn: (caseConverter: CaseConverter) => CaseKeysConverter;
/**
 * convert object with snake_case keys to object with camelCase keys.
 */
export declare const toCamelCaseKeys: CaseKeysConverter;
/**
 * convert object with camelCase keys to object with snake_case keys.
 */
export declare const toSnakeCaseKeys: CaseKeysConverter;
