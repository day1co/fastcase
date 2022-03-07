/**
 * Convert the given source case string to a target case string.
 */
export interface CaseConverter {
  (s: string): string;
  (s: any): any;
}
