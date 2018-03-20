declare module "theming" {
  import { Component } from "react";
  export class ThemeProvider extends Component<{ theme: any }> {}
  export type channel = any;
  export type withTheme = Function;
  export type themeListener = Function;
  export type createTheming = Function;
  const theming: {
    channel: any;
    withTheme: Function;
    ThemeProvider: ThemeProvider;
    themeListener: Function;
    createTheming: Function;
  };
  export default theming;
}
