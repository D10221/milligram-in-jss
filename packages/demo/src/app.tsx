import * as React from "react";
import { ComponentType, Component } from "react";
import { ThemeProvider } from "react-jss";
import theme from "./theme";
import jss from "jss";
import preset from "jss-preset-default";
import withStyles, { Classes } from "react-jss";
import styles from "./styles";
import * as classnames from "classnames";
/** typeface */
import * as webFont from "webfontloader";
import { Icon } from "@d10221/icon";
import { Menu } from "./menu";
// load font
webFont.load({
  google: {
    families: ["Roboto", "Material Icons"],
  },
});
// setup jss
jss.setup(preset());
// load resources
const logo = require("./logo.svg");
/** */
const App: ComponentType<{}> = withStyles(styles)(
  /** */
  class App extends Component<{ classes: Classes }> {
    state = {
      isMenuOpen: false
    }
    target: any;
    render() {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <div className={classes.toolbar}>
            <img src={logo} className={classes.logoSmall} alt="logo" />
            <h3 className={classes.toolbarTitle}>Milligram</h3>
            <div className={classes.spacer} />
            <Menu
              open={this.state.isMenuOpen}
              onClose={e => { this.setState({ isMenuOpen: false }) }}
              target={<button
                ref={x => this.target = x}
                className={classnames("button button-clear", classes.iconButton)}
                onClick={e => {
                  console.log("set-state: isOpen:%s", true);
                  this.setState({ isMenuOpen: true })
                }}><Icon>menu</Icon></button>}
            >
              <div>ITEM 1</div>
              <div>ITEM 2</div>
              <div>ITEM 3</div>
            </Menu>
          </div>
          <header className={classes.header}>
            <img src={logo} className={classes.logo} alt="logo" />
            <h1 className={classes.title}>Milligram</h1>
          </header>
          <div className={classnames(classes.container, "container")}>
            <p>
              To get started, edit <code>src/app.tsx</code> and save to reload.
            </p>
          </div>
        </div>
      );
    }
  },
);
/**
 * export it with theme root
 */
export default () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
