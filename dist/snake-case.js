"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SnakeCase {
    constructor() {
        /**
         * convert the given **snake_case** string to a camelCase string.
         */
        this.toCamelCase = (s) => {
            if (typeof s !== 'string') {
                return s;
            }
            return s.replace(SnakeCase.SNAKE_CASE_REGEXP, (m, p1, p2) => p1 + p2.toUpperCase());
        };
    }
    static create() {
        return new SnakeCase();
    }
}
exports.default = SnakeCase;
SnakeCase.SNAKE_CASE_REGEXP = /(.*?)_([a-z0-9])/g;
//# sourceMappingURL=snake-case.js.map