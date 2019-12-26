"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CAMEL_CASE_REGEXP = /(.+?)([A-Z]+[a-z0-9])/g;
/**
 * convert the given **camelCase** string to a snake_case string.
 */
exports.toSnakeCase = (s) => {
    if (typeof s !== 'string') {
        return s;
    }
    return s.replace(CAMEL_CASE_REGEXP, (m, p1, p2) => `${p1}_${p2}`.toLowerCase());
};
//# sourceMappingURL=camel-case.js.map