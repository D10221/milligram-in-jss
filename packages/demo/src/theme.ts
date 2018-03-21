import { global } from "milligram-in-js";
/**
 *
 */
const theme = {
  milligram: global["@global"],
  colors: {
    initial: "#fff",
    primary: "#9b4dca",
    secondary: " #606c76",
    tertiary: "#f4f5f6",
    quaternary: "#d1d1d1",
    quinary: "#e1e1e1",
  },
};
export type Theme = typeof theme;
export default theme;
