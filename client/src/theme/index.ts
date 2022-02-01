import { colors } from "./colors";

export const theme = {
  white: "#ffffff",
  black: "#000000",
  primary: colors.yellamerica,

  bg: {
    primary: colors.yellamerica[400],
    primaryHover: colors.yellamerica[300],
    primaryActive: colors.yellamerica[500],

    disabled: colors.liver[200],

    dark: colors.liver[900],
    darkGray: colors.liver[600],
    gray: colors.liver[300],
    lightGray: colors.liver[100],
    light: colors.liver[50],
    transparent: "transparent",
  },

  text: {
    primary: colors.yellamerica[400],
    primaryActive: colors.yellamerica[700],

    dark: colors.liver[900],
    darkGray: colors.liver[600],
    gray: colors.liver[300],
    lightGray: colors.liver[100],
    light: colors.liver[50],

    danger: colors.danger[500],
    placeholder: colors.liver[300],

    link: colors.silveria[900],
  },

  icons: {
    primary: colors.yellamerica[400],
    primaryActive: colors.yellamerica[700],

    light: colors.liver[100],
    gray: colors.liver[300],
    dark: colors.liver[900],
  },

  modal: {
    matte: `${colors.liver[900]}80`,
  },

  lines: colors.liver[300],

  shadows: {
    base: `0px 19px 38px ${colors.liver[900]}0D, 0px 13px 12px ${colors.liver[900]}1A, 0px 6px 8px ${colors.liver[900]}16`,
    baseLight: `0px 19px 38px ${colors.liver[50]}26, 0px 13px 12px ${colors.liver[50]}33, 0px 6px 8px ${colors.liver[50]}40`,
    buttons: `0px 12px 32px ${colors.liver[900]}0D, 0px 8px 12px ${colors.liver[900]}1A, 0px 2px 6px ${colors.liver[900]}16`,
    buttontsActive: `0px 6px 8px ${colors.liver[900]}0D, 0px 2px 4px ${colors.liver[900]}1A`,
    buttonsColored: `0px 12px 32px ${colors.yellamerica[500]}1A, 0px 8px 12px ${colors.yellamerica[500]}26, 0px 2px 6px ${colors.yellamerica[600]}33`,
    buttonsColoredActive: `0px 6px 8px ${colors.yellamerica[500]}1A, 0px 2px 4px ${colors.yellamerica[600]}33`,
  },
};

export type ThemeType = typeof theme;
