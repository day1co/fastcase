import CaseConverter from './case-converter';
/**
 * Convert the given source object to an object with target case keys.
 */
export default interface CaseKeysConverter {
    (obj: object): object;
    (obj: Array<any>): Array<any>;
    (obj: any): any;
}
export declare const createCaseKeysConverter: (caseConverter: CaseConverter) => CaseKeysConverter;
