/**
 * Convert the given source case string to a target case string.
 */
export default interface CaseConverter {
    (s: string): string;
    (s: any): any;
}
