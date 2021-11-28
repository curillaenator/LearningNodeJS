import { colors } from "./colors";

export const theme = {
  white: "#ffffff",
  black: "#000000",

  bg: {
    primary: colors.yellamerica[400],
    primaryHover: colors.yellamerica[300],
    primaryActive: colors.yellamerica[500],

    dark: "#222831",
    gray: "#393E46",
    light: "#EEEEEE",
  },

  text: {
    primary: colors.yellamerica[400],
    dark: colors.liver[900],
    gray: colors.liver[600],
    light: colors.liver[100],
  },
};

export type ThemeType = typeof theme;
