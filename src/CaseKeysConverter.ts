import type { CaseConverter } from './CaseConverter';

/**
 * Convert the given source object to an object with target case keys.
 */
export interface CaseKeysConverter {
  (obj: object): object;
  (obj: Array<any>): Array<any>;
  (obj: any): any;
}

export const createCaseKeysConverter = (caseConverter: CaseConverter): CaseKeysConverter => {
  const toCaseKeys = (obj: any): any => {
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
