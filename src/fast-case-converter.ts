import CaseConverter from './case-converter';

export const createFastCaseConverter = (fn: CaseConverter, cache: any = {}): CaseConverter => {
  return (s: string) => {
    const cached = cache[s];
    if (cached) {
      return cached;
    }
    let result = fn(s);
    cache[s] = result;
    return result;
  };
};
