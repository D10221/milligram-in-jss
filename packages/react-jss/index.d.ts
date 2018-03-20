declare module "react-jss" {
  import {
    ComponentClass,
    StatelessComponent,
    CSSProperties,
    Component,
  } from "react";

  export type Styles = { [key: string]: CSSProperties };
  export type Theme = Styles & {};
  export type StylesCallback = (theme?: Theme) => Styles;
  export type ReactType<T = {}> = ComponentClass<T> | StatelessComponent<T>;
  export type Classes = { [key: string]: string };
  export type StyledProps = { classes?: Classes };

  const injectSheet: (
    styles: Styles | StylesCallback,
  ) => <T extends StyledProps = StyledProps>(
    C: ReactType<T>,
  ) => ComponentClass<T>;

  export default injectSheet;

  import { ThemeProvider, withTheme, createTheming } from "theming";
  import jss, { SheetsRegistry } from "jss";
  class JssProvider extends Component<{
    jss?: {
      options?: {
        createGenerateClassName: Function;
      };
      createStyleSheet: Function;
      removeStyleSheet: Function;
      registry: SheetsRegistry;
    };
    generateClassName?: Function;
    classNamePrefix?: string;
  }> {}
  const createGenerateClassName: Function;
  export {
    ThemeProvider,
    withTheme,
    createTheming,
    JssProvider,
    jss,
    SheetsRegistry,
    createGenerateClassName,
  };
}
