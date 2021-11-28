import { IconType } from "./assets/icons";

export interface ButtonProps {
  title?: string;
  icon?: IconType;
  type?: "submit" | "button";
  size?: "s" | "m" | "l" | "xl";
  onClick?: () => void;
}

export interface ButtonParams {
  h: string;
  padding: string;
  fontsize: string;
  radius: string;
  gap: string;
  iconsize: string;
}
