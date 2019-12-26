"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const snake_case_1 = __importDefault(require("./snake-case"));
const camel_case_1 = __importDefault(require("./camel-case"));
const memoize_1 = require("./memoize");
exports.snakeCase = snake_case_1.default.create();
exports.toCamelCase = exports.snakeCase.toCamelCase;
/**
 * with cache,
 * convert the given **snake_case** string to a camelCase string,
 */
exports.toCamelCaseFast = memoize_1.memoize(exports.snakeCase.toCamelCase);
exports.camelCase = camel_case_1.default.create();
exports.toSnakeCase = exports.snakeCase.toCamelCase;
/**
 * with cache,
 * convert the given **camelCase** string to a snake_case string.
 */
exports.toSnakeCaseFast = memoize_1.memoize(exports.camelCase.toSnakeCase);
/**
 * return case keys converter function using the given case string converter function.
 */
exports.toCaseKeysFn = (caseConverter) => {
    const toCaseKeys = (obj) => {
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
exports.toCamelCaseKeys = exports.toCaseKeysFn(exports.toCamelCaseFast);
/**
 * convert object with camelCase keys to object with snake_case keys.
 */
exports.toSnakeCaseKeys = exports.toCaseKeysFn(exports.toSnakeCaseFast);
//# sourceMappingURL=index.js.map