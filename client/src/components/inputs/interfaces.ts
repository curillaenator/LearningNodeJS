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
  disabled?: boolean;
  onChange: (value: boolean) => void;
}

// RADIO

export interface RadioParams {
  h: string;
  padding: string;
  fontsize: string;
  radius: string;
  gap: string;
  glyphSize: string;
  borderChecked: string;
  borderUnchecked: string;
}

export interface RadioStyledProps {
  checked: boolean;
  params: RadioParams;
}

export interface RadioProps {
  id: string;
  title?: string;
  size?: "s" | "m" | "l" | "xl";
  disabled?: boolean;
  checked: boolean;
  onChange: (id: string) => void;
}
