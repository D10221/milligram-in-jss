declare module "jss" {
  export type getDynamicStyles = Function;

  export type SheetsRegistry = {
    add: Function;
  };

  export class SheetsManager {
    // ...
  }

  export class RuleList {
    // ...;
  }

  export const sheets: any;

  export const create: Function;

  class Jss {
    setup: Function;
  }
  const jss: Jss;
  export default jss;
}
