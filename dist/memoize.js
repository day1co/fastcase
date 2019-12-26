"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoize = (fn, cache = {}) => {
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
//# sourceMappingURL=memoize.js.map