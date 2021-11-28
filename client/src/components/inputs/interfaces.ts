import { InputIconsType } from "./assets/icons";

// TEXT INPUT

type IInputState = "normal" | "success" | "error";

export interface IInputStyled {
  state: IInputState;
  isIcon: boolean;
  isFocused: boolean;
  buttonWidth: number;
  hasValue: boolean;
}

export interface TextInputProps {
  state?: IInputState;
  iconName?: InputIconsType;
  type?: "text" | "email" | "password" | "url";
  name: string;
  description?: string;
  placeholder?: string;
  value: string;
  limitSymbols?: number;
  onChange: (valueString: string) => void;
  onFocusOut?: () => void;
}

// SWITCH

export interface SwitchProps {
  title?: string;
  value: boolean;
  onChange: (value: boolean) => void;
}
