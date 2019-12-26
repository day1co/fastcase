"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const camel_case_1 = require("./camel-case");
exports.toSnakeCase = camel_case_1.toSnakeCase;
const snake_case_1 = require("./snake-case");
exports.toCamelCase = snake_case_1.toCamelCase;
const fast_case_converter_1 = require("./fast-case-converter");
const case_keys_converter_1 = require("./case-keys-converter");
/**
 * with cache,
 * convert the given **camelCase** string to a snake_case string.
 */
exports.toSnakeCaseFast = fast_case_converter_1.createFastCaseConverter(camel_case_1.toSnakeCase);
/**
 * with cache,
 * convert object with camelCase keys to object with snake_case keys.
 */
exports.toSnakeCaseKeys = case_keys_converter_1.createCaseKeysConverter(exports.toSnakeCaseFast);
/**
 * with cache,
 * convert the given **snake_case** string to a camelCase string,
 */
exports.toCamelCaseFast = fast_case_converter_1.createFastCaseConverter(snake_case_1.toCamelCase);
/**
 * with cache,
 * convert object with snake_case keys to object with camelCase keys.
 */
exports.toCamelCaseKeys = case_keys_converter_1.createCaseKeysConverter(exports.toCamelCaseFast);
//# sourceMappingURL=index.js.map