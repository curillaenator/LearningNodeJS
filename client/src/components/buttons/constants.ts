import { ButtonParams } from "./interfaces";

export const PARAMS: { [size: string]: ButtonParams } = {
  xl: {
    h: "56px",
    padding: "0 16px",
    fontsize: "16px",
    radius: "16px",
    gap: "16px",
    iconsize: "24px",
    iconPadding: "0 16px 0 14px",
  },

  l: {
    h: "40px",
    padding: "0 12px",
    fontsize: "14px",
    radius: "12px",
    gap: "12px",
    iconsize: "20px",
    iconPadding: "0 12px 0 10px",
  },

  m: {
    h: "32px",
    padding: "0 12px",
    fontsize: "14px",
    radius: "10px",
    gap: "10px",
    iconsize: "18px",
    iconPadding: "0 12px 0 10px",
  },

  s: {
    h: "24px",
    padding: "0 8px",
    fontsize: "12px",
    radius: "8px",
    gap: "8px",
    iconsize: "16px",
    iconPadding: "0 8px 0 6px",
  },
};
