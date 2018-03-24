import * as React from "react";
import { Component, ComponentType } from "react";
//
import { Popper, Manager, Target } from "react-popper";
import { ClickAwayListener } from "@d10221/click-away-listener";
import withStyles, { Classes } from "react-jss";
import * as classNames from "classnames";
import styles from "./styles";
/** */
export type MenuProps = {
  open: boolean;
  onClose(e: MouseEvent): any;
  target: any;
  poperClassName?: string;
};
/**
 *
 */
const Menu: ComponentType<MenuProps> = withStyles(styles)(
  class Menu extends Component<MenuProps & { classes: Classes }> {
    static displayName = "Menu";
    handleClickAway = (e: MouseEvent) => {
      console.log("handle-click-away");
      this.props.onClose && this.props.onClose(e);
    };
    render() {
      const { classes /*open*/ } = this.props;
      return (
        <Manager>
          <Target>{this.props.target}</Target>
          {open && (
            <Popper
              placement="bottom-start"
              className={classNames(classes.popover, this.props.poperClassName)}
            >
              <ClickAwayListener onClickAway={this.handleClickAway}>
                <ul className={classes.popoverList}>
                  {React.Children.map(this.props.children, Child => {
                    return <li className={classes.popoverItem} >{Child}</li>;
                  })}
                </ul>
              </ClickAwayListener>
            </Popper>
          )}
        </Manager>
      );
    }
  },
);
export default Menu;
