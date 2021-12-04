import React from "react";
import { ButtonParams } from "./interfaces";

export const PARAMS: { [size: string]: ButtonParams } = {
  xl: {
    h: "56px",
    padding: "0 16px",
    fontsize: "16px",
    radius: "16px",
    gap: "16px",
    iconsize: "20px",
    iconPadding: "0 16px 0 14px",
  },

  l: {
    h: "40px",
    padding: "0 12px",
    fontsize: "14px",
    radius: "12px",
    gap: "12px",
    iconsize: "18px",
    iconPadding: "0 12px 0 10px",
  },

  m: {
    h: "32px",
    padding: "0 12px",
    fontsize: "14px",
    radius: "10px",
    gap: "10px",
    iconsize: "14px",
    iconPadding: "0 12px 0 10px",
  },

  s: {
    h: "24px",
    padding: "0 8px",
    fontsize: "12px",
    radius: "8px",
    gap: "8px",
    iconsize: "10px",
    iconPadding: "0 8px 0 6px",
  },
};

export const CARET = (
  <svg
    className="triger-icon"
    // width="8px"
    // height="5px"
    viewBox="0 0 8 5"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Rounded" transform="translate(-482.000000, -3442.000000)">
        <g id="Navigation" transform="translate(100.000000, 3378.000000)">
          <g
            id="-Round-/-Navigation-/-arrow_drop_down"
            transform="translate(374.000000, 54.000000)"
          >
            <g>
              <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
              <path
                d="M8.71,11.71 L11.3,14.3 C11.69,14.69 12.32,14.69 12.71,14.3 L15.3,11.71 C15.93,11.08 15.48,10 14.59,10 L9.41,10 C8.52,10 8.08,11.08 8.71,11.71 Z"
                id="🔹-Icon-Color"
                className="triger-icon-dark"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
