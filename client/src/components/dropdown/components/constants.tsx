import React from "react";
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
    iconsize: "16px",
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

export const CARET = (
  <svg
    // width="512px"
    // height="512px"
    className="trigger-icon"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="trigger-icon-dark"
      d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM342.43,238.23,268.3,327.32a16,16,0,0,1-24.6,0l-74.13-89.09A16,16,0,0,1,181.86,212H330.14A16,16,0,0,1,342.43,238.23Z"
    />
  </svg>
);
