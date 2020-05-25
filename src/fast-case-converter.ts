import CaseConverter from './case-converter';

export const createFastCaseConverter = (fn: CaseConverter, cache: any = {}): CaseConverter => {
  return (s: string) => {
    const cached = cache[s];
    if (cached) {
      return cached;
    }
    return (cache[s] = fn(s));
  };
};
