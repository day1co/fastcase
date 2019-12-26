import CaseConverter from './case-converter';
import { createFastCaseConverter } from './fast-case-converter';
import { createCaseKeysConverter } from './case-keys-converter';

const CAMEL_CASE_REGEXP = /(.+?)([A-Z]+[a-z0-9])/g;

/**
 * convert the given **camelCase** string to a snake_case string.
 */
export const toSnakeCase: CaseConverter = (s: any) => {
  if (typeof s !== 'string') {
    return s;
  }
  return s.replace(CAMEL_CASE_REGEXP, (m, p1, p2) => `${p1}_${p2}`.toLowerCase());
};
