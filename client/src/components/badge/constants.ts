import { BadgeParams, BadgeSizes } from "./interfaces";

export const PARAMS: Record<BadgeSizes, BadgeParams> = {
  xl: {
    h: "56px",
    padding: "0 16px",
    fontsize: "16px",
    radius: "16px",
    gap: "16px",
  },

  l: {
    h: "40px",
    padding: "0 12px",
    fontsize: "14px",
    radius: "12px",
    gap: "12px",
  },

  m: {
    h: "32px",
    padding: "0 12px",
    fontsize: "14px",
    radius: "10px",
    gap: "10px",
  },

  s: {
    h: "24px",
    padding: "0 8px",
    fontsize: "12px",
    radius: "8px",
    gap: "8px",
  },
};
