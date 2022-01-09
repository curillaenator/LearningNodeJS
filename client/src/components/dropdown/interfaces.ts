import { PopupPosition } from "reactjs-popup/dist/types";

export interface DropdownProps {
  triggerTitle?: string;
  trigger?: JSX.Element | ((isOpen: boolean) => JSX.Element);
  position?: PopupPosition;
  offsetY?: number;
  disabled?: boolean;
}
