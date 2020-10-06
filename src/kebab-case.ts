import CaseConverter from './case-converter';

const KEBAB_CASE_REGEXP = /(\-)([a-z|0-9])/g;
/**
 * convert the given **kebab-case** string to a macro_case string.
 */
export const toMacroCase: CaseConverter = (s: any) => {
  if (typeof s !== 'string' || !s.length) {
    return s;
  }
  return s.replace(KEBAB_CASE_REGEXP, (m, p1, p2) => `_${p2}`).toUpperCase();
};
