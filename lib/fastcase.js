const SNAKE_CASE_REGEXP = /(.*?)_([a-z0-9])/g;

/**
 * convert the given **snake_case** string to a camelCase string.
 *
 * @param s {string|*} snake case string
 * @returns {string|*} camel case string
 */
const toCamelCase = s => {
  if (typeof s !== 'string') {
    return s;
  }
  return s.replace(SNAKE_CASE_REGEXP, (m, p1, p2) => p1 + p2.toUpperCase());
};

const CAMEL_CASE_REGEXP = /(.+?)([A-Z]+[a-z0-9])/g;

/**
 * convert the given **camelCase** string to a snake_case string.
 *
 * @param s {string|*} camel case string
 * @returns {string|*} snake case string
 */
const toSnakeCase = s => {
  if (typeof s !== 'string') {
    return s;
  }
  return s.replace(CAMEL_CASE_REGEXP, (m, p1, p2) => `${p1}_${p2}`.toLowerCase());
};

const memoize = (fn, cache = {}) => {
  return s => {
    const cached = cache[s];
    if (cached) {
      return cached;
    }
    let result = fn(s);
    cache[s] = result;
    return result;
  };
};

/**
 * with cache,
 * convert the given **snake_case** string to a camelCase string,
 *
 * @param s {string|*} snake case string
 * @returns {string|*} camel case string
 */
const toCamelCaseFast = memoize(toCamelCase);

/**
 * with cache,
 * convert the given **camelCase** string to a snake_case string.
 *
 * @param s {string|*} camel case string
 * @returns {string|*} snake case string
 */
const toSnakeCaseFast = memoize(toSnakeCase);

/**
 * return case keys converter function using the given case string converter function.
 *
 * @param toCaseFunc {function(string):string} case string converter function
 * @returns {function(object|array|*):object|array|*} case keys converter function
 */
const toCaseKeysFn = toCaseFunc => {
  const toCaseKeysFunc = obj => {
    if (Array.isArray(obj)) {
      return obj.map(toCaseKeysFunc);
    }
    if (typeof obj === 'object' && obj !== null) {
      const result = {};
      for (const [key, value] of Object.entries(obj)) {
        result[toCaseFunc(key)] = value;
      }
      return result;
    }
    return obj;
  };
  return toCaseKeysFunc;
};

/**
 * convert object with snake_case keys to object with camelCase keys.
 *
 * @params obj {object|array|*} the object with snake_case keys
 * @return {object|array|*} the object with camelCase keys
 */
const toCamelCaseKeys = toCaseKeysFn(toCamelCaseFast);

/**
 * convert object with camelCase keys to object with snake_case keys.
 *
 * @params obj {object|array|*} the object with camelCase keys
 * @return {object|array|*} the object with snake_case keys
 */
const toSnakeCaseKeys = toCaseKeysFn(toSnakeCaseFast);

module.exports = {
  toCamelCase,
  toSnakeCase,
  toCamelCaseFast,
  toSnakeCaseFast,
  toCaseKeysFn,
  toCamelCaseKeys,
  toSnakeCaseKeys,
};
