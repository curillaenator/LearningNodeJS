import { ButtonParams } from "./interfaces";

export const PARAMS: { [size: string]: ButtonParams } = {
  xl: {
    h: "56px",
    padding: "0 16px",
    fontsize: "16px",
    radius: "16px",
    gap: "16px",
    iconsize: "24px",
  },

  l: {
    h: "40px",
    padding: "0 12px",
    fontsize: "16px",
    radius: "12px",
    gap: "12px",
    iconsize: "24px",
  },

  m: {
    h: "32px",
    padding: "0 12px",
    fontsize: "16px",
    radius: "12px",
    gap: "12px",
    iconsize: "20px",
  },

  s: {
    h: "24px",
    padding: "0 8px",
    fontsize: "12px",
    radius: "8px",
    gap: "8px",
    iconsize: "16px",
  },
};
