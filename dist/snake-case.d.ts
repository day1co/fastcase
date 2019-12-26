import CaseConverter from './case-converter';
export default class SnakeCase {
    static SNAKE_CASE_REGEXP: RegExp;
    static create(): SnakeCase;
    /**
     * convert the given **snake_case** string to a camelCase string.
     */
    toCamelCase: CaseConverter;
}
