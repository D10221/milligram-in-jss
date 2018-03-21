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
//
import { Manager, Target, Popper, Arrow } from "react-popper";
import ClickAwayListener from "./click-away-listener";

const PopperExample = class extends Component<{
  content: React.ReactElement<{}>;
}> {
  state = {
    isOpen: false,
  };
  handleTargetClick = () => {
    this.setState({ isOpen: true });
  };
  render() {
    const { isOpen } = this.state;
    return (
      <Manager>
        <Target>
          <ClickAwayListener
            onClickAway={() => this.setState({ isOpen: false })}
          >
            <button onClick={this.handleTargetClick}> OK </button>
          </ClickAwayListener>
        </Target>
        {isOpen && (
          <Popper placement="bottom-start" className="popper">
            {this.props.content}
            <Arrow className="popper__arrow" />
          </Popper>
        )}
      </Manager>
    );
  }
};
/** */
const App: ComponentType<{}> = withStyles(styles)(
  /** */
  class App extends Component<{ classes: Classes }> {
    render() {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <div className={classes.toolbar}>
            <img src={logo} className={classes.logoSmall} alt="logo" />
            <h3 className={classes.toolbarTitle}>Milligram</h3>
            <div className={classes.spacer} />
            <button
              className={classnames("button button-clear", classes.iconButton)}
            >
              <Icon>menu</Icon>
            </button>
          </div>
          <header className={classes.header}>
            <img src={logo} className={classes.logo} alt="logo" />
            <h1 className={classes.title}>Milligram</h1>
          </header>
          <div className={classnames(classes.container, "container")}>
            <p>
              To get started, edit <code>src/app.tsx</code> and save to reload.
            </p>
            <PopperExample content={<div>Hello</div>} />
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
