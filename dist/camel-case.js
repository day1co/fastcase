"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CamelCase {
    constructor() {
        /**
         * convert the given **camelCase** string to a snake_case string.
         */
        this.toSnakeCase = (s) => {
            if (typeof s !== 'string') {
                return s;
            }
            return s.replace(CamelCase.CAMEL_CASE_REGEXP, (m, p1, p2) => `${p1}_${p2}`.toLowerCase());
        };
    }
    static create() {
        return new CamelCase();
    }
}
exports.default = CamelCase;
CamelCase.CAMEL_CASE_REGEXP = /(.+?)([A-Z]+[a-z0-9])/g;
//# sourceMappingURL=camel-case.js.map