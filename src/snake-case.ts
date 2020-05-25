import CaseConverter from './case-converter';

// https://dev.to/rrampage/snake-case-to-camel-case-and-back-using-regular-expressions-and-python-m9j?signin=true
const SNAKE_CASE_REGEXP = /(.*?)_+([a-zA-Z])/g;

/**
 * convert the given **snake_case** string to a camelCase string.
 */
export const toCamelCase: CaseConverter = (s: string) => {
  if (typeof s !== 'string' || !s.length) {
    return s;
  }
  return s.replace(SNAKE_CASE_REGEXP, (m, p1, p2) => `${p1}${p2.toUpperCase()}`);
};
