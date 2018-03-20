import * as React from 'react';
import { ComponentType } from 'react';
import { ThemeProvider } from 'react-jss';
import theme from './theme';
import jss from 'jss';
import preset from 'jss-preset-default';
import withStyles, { Classes } from 'react-jss';
import styles from './styles';
import * as classnames from "classnames";
/** typeface */
import * as webFont from "webfontloader";

webFont.load({
  google: {
    families: ['Roboto', 'Material Icons']
  }
});

jss.setup(preset());

const logo = require('./logo.svg');
/** */
const App: ComponentType<{}> = withStyles(styles)(
  /** */
  class App extends React.Component<{ classes: Classes }> {
    render() {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <header className={classes.header}>
            <img src={logo} className={classes.logo} alt="logo" />
            <h1 className={classes.title}>Milligram</h1>
          </header>
          <div className={classnames(classes.container, "container")}>
            <p>
              To get started, edit <code>src/app.tsx</code> and save to reload.
          </p></div>
        </div>
      );
    }
  }
);

export default () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);