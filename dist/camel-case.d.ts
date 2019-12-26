import CaseConverter from './case-converter';
export default class CamelCase {
    static CAMEL_CASE_REGEXP: RegExp;
    static create(): CamelCase;
    /**
     * convert the given **camelCase** string to a snake_case string.
     */
    toSnakeCase: CaseConverter;
}
