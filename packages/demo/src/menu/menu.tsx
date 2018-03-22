import * as React from "react";
import { Component, ComponentType } from "react";
import Transition from "react-transition-group/Transition";
//
import { Manager, Target, Popper } from "react-popper";
import { ClickAwayListener } from "@d10221/click-away-listener";
import withStyles, { StylesCallback, Classes, } from "react-jss";

const styles: StylesCallback = (theme) => {
    return {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
    }
}
/** */
export type MenuProps = {
    open: boolean;
    button: React.ReactNode;
    onClose(e: MouseEvent): any;
};
/**
 * 
 */
const Menu: ComponentType<MenuProps> = withStyles(styles)(
    class Menu extends Component<MenuProps & { classes: Classes }> {
        static displayName = "Menu";
        handleClose = (e: MouseEvent) => this.props.onClose && this.props.onClose(e);
        render() {
            const { classes } = this.props;
            return (
                <Manager>
                    <Target>
                        <ClickAwayListener
                            onClickAway={this.handleClose}
                        >
                            {this.props.button}
                        </ClickAwayListener>
                    </Target>
                    {(state: any) => <Transition in={this.props.open} timeout={300}>
                        <Popper
                            placement="bottom-start"
                            className={classes[state]}>
                            {this.props.children}
                        </Popper>
                    </Transition>}
                </Manager>
            );
        }
    }
);
export default Menu