import { StylesCallback } from "react-jss";
import { Theme } from "../theme";

const styles: StylesCallback = (theme: Theme) => {
  return {
    popover: {
      display: "flex",
      background: theme.colors.initial,
      border: `.1rem solid ${theme.colors.quaternary}`,
      borderRadius: ".4rem",
      // display: "none",
      filter: "drop-shadow(0 0 .6rem rgba(0, 0, 0, .1))",
      left: "50%",
      minWidth: "13.4rem",
      position: "absolute",
      top: "94%",
      transform: "translateX(-50%)",
      "&:before": {
        border: "solid transparent",
        borderColor: "transparent",
        borderWith: theme.spacing.unit,
        content: " ",
        height: 0,
        left: "50%",
        pointerEvents: "none",
        position: "absolute",
        right: "1.7rem",
        top: 0,
        width: 0,
        borderBottomColor: `${theme.colors.quaternary}`,
        transform: "translate(-50%, -102%)",
      },
      "&:after": {
        // include before
        borderBottomColor: theme.colors.initial,
        transform: "translate(-50%, -100%)",
      },
    },
    popoverList: {
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    popoverItem: {
      margin: 0,
      padding: 0,
    },
    // 	&:first-child .popover-link
    // 		border-radius: .4rem .4rem 0 0

    // 	&:last-child .popover-link
    // 		border-bottom-width: 0
    // 		border-radius: 0 0 .4rem .4rem
    popoverLink: {
      borderBottom: `.1rem solid ${theme.colors.quaternary}`,
      color: theme.colors.secondary,
      fontSize: "1.2rem",
      padding: ".8rem 2.0rem",
      position: "relative",
      textAlign: "center",
      textDecoration: "none",
      "&:hover": {
        background: theme.colors.primary,
        borderBottomColor: theme.colors.primary,
        color: theme.colors.initial,
      },
    },  
  };
};
export default styles;
