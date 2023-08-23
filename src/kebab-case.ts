import CaseConverter from './case-converter';

// https://www.geeksforgeeks.org/how-to-convert-a-string-into-kebab-case-using-javascript/
const KEBAB_CASE_REGEXP1 = /([a-z1-9])([A-Z])/g;
const KEBAB_CASE_REGEXP2 = /[\s_]+/g;
const KEBAB_CASE_REGEXP3 = /-{2,}/g;

/**
 * convert the given **snake_case** string to a camelCase string.
 */
export const toKebabCase: CaseConverter = (s: string) => {
  if (typeof s !== 'string' || !s.length) {
    return s;
  }
  return s
    .replace(KEBAB_CASE_REGEXP1, (m, p1, p2) => `${p1}-${p2}`)
    .replace(KEBAB_CASE_REGEXP2, () => `-`)
    .replace(KEBAB_CASE_REGEXP3, () => `-`)
    .toLowerCase();
};
