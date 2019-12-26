"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SNAKE_CASE_REGEXP = /(.*?)_([a-z0-9])/g;
/**
 * convert the given **snake_case** string to a camelCase string.
 */
exports.toCamelCase = (s) => {
    if (typeof s !== 'string') {
        return s;
    }
    return s.replace(SNAKE_CASE_REGEXP, (m, p1, p2) => p1 + p2.toUpperCase());
};
//# sourceMappingURL=snake-case.js.map