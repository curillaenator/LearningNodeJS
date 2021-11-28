import { InputIconsType } from "./assets/icons";

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
  // buttonTitle?: string;
  // withButton?: boolean;
  onChange: (valueString: string) => void;
  onFocusOut?: () => void;
}
