"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCaseKeysConverter = (caseConverter) => {
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
//# sourceMappingURL=case-keys-converter.js.map