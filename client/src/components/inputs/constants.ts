import { RadioParams } from "./interfaces";

export const RADIO_PARAMS: { [size: string]: RadioParams } = {
  xl: {
    h: "56px",
    padding: "0 16px",
    fontsize: "16px",
    radius: "16px",
    gap: "16px",
    glyphSize: "24px",
    borderUnchecked: "3px",
    borderChecked: "6px",
  },

  l: {
    h: "40px",
    padding: "0 12px",
    fontsize: "14px",
    radius: "12px",
    gap: "12px",
    glyphSize: "20px",
    borderUnchecked: "2.5px",
    borderChecked: "5px",
  },

  m: {
    h: "32px",
    padding: "0 12px",
    fontsize: "14px",
    radius: "10px",
    gap: "10px",
    glyphSize: "16px",
    borderUnchecked: "2px",
    borderChecked: "4px",
  },

  s: {
    h: "24px",
    padding: "0 8px",
    fontsize: "12px",
    radius: "8px",
    gap: "8px",
    glyphSize: "16px",
    borderUnchecked: "",
    borderChecked: "",
  },
};
