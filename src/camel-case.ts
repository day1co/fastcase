import CaseConverter from './case-converter';

// see https://dev.to/rrampage/snake-case-to-camel-case-and-back-using-regular-expressions-and-python-m9j
const CAMEL_CASE_REGEXP = /(.+?)([A-Z])/g;

/**
 * convert the given **camelCase** string to a snake_case string.
 */
export const toSnakeCase: CaseConverter = (s: any) => {
  if (typeof s !== 'string' || !s.length) {
    return s;
  }
  return s.replace(CAMEL_CASE_REGEXP, (m, p1, p2) => `${p1}_${p2}`.toLowerCase());
};
