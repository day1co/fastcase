import CaseConverter from './case-converter';

export default class SnakeCase {
  static SNAKE_CASE_REGEXP = /(.*?)_([a-z0-9])/g;

  static create(): SnakeCase {
    return new SnakeCase();
  }

  /**
   * convert the given **snake_case** string to a camelCase string.
   */
  toCamelCase: CaseConverter = (s: string) => {
    if (typeof s !== 'string') {
      return s;
    }
    return s.replace(SnakeCase.SNAKE_CASE_REGEXP, (m, p1, p2) => p1 + p2.toUpperCase());
  };
}
