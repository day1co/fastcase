import CaseConverter from './case-converter';

export default interface CaseKeysConverter {
  (obj: object): object;
  (obj: Array<any>): Array<any>;
  (obj: any): any;
}
