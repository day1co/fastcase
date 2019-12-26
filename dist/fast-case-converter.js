"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFastCaseConverter = (fn, cache = {}) => {
    return (s) => {
        const cached = cache[s];
        if (cached) {
            return cached;
        }
        let result = fn(s);
        cache[s] = result;
        return result;
    };
};
//# sourceMappingURL=fast-case-converter.js.map