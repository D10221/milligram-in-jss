// import { global } from "milligram-in-js";
import { StylesCallback } from "react-jss";
import { Theme } from "./theme";
/**
 *
 * @param theme
 */
const styles: StylesCallback = (theme: Theme) => {
  return {
    //...global,
    "@global": theme.milligram,
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    iconButton: {        
        margin: "1rem",
        display: "flex",
        alignItems: "center",
        padding: 0
    },
    logo: {
      height: "6rem",
      margin: "1rem",
    },
    logoSmall: {
      height: "3rem",
      margin: "1rem",
    },
    title: {
      flex: "1",
    },
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "15%",
    },
    toolbar: {
      display: "flex",
      flex: "1",
      position: "fixed",
      top: 0,
      left: 0,
      background: theme.colors.quinary,
      width: "100%",
      boxShadow: `0px 1px 0px 0px ${theme.colors.primary}`,
      alignItems: "center",
      paddingLeft: "1rem",
      paddingRight: "1rem"
    },
    toolbarTitle: {
        margin: "1rem",
        marginLeft: 0,
    },
    spacer: {
        flex: "1",
    },
  };
};
export default styles;
