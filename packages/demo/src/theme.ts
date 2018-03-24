import { global } from "milligram-in-js";
const colors = {
  initial: "#fff",
  primary: "#9b4dca",
  secondary: " #606c76",
  tertiary: "#f4f5f6",
  quaternary: "#d1d1d1",
  quinary: "#e1e1e1",
};
const fonts = {
  initial: {
    fontFamily: "'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    fontSize: "1.6em",
    fontWeight: "300",
    letterSpacing: ".01em",
    lineHeight: "1.6",
  },
};
/**
 *
 */
const theme = {
  milligram: global["@global"],
  colors,
  fonts,
  spacing: {
    unit: "1rem",
  },
};
export type Theme = typeof theme;
export default theme;
