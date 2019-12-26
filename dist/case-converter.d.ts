export default interface CaseConverter {
    /**
     * Convert the given source case string to a target case string.
     */
    (s: string): string;
    (s: any): any;
}
