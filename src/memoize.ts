import CaseConverter from './case-converter';

export const memoize = (fn: CaseConverter, cache: any = {}) => {
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
