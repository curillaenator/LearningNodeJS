export interface TriggerProps {
  title?: string;
  active?: boolean;
  size?: "s" | "m" | "l" | "xl";
  disabled?: boolean;
}

export interface Item {
  id?: string;
  title: string;
  onClick: (item?: { id?: string; title: string }) => void;
}

export interface MenuProps {
  maxHeight?: string;
  items: Item[];
  close: () => void;
}

export interface ButtonParams {
  h: string;
  padding: string;
  fontsize: string;
  radius: string;
  gap: string;
  iconsize: string;
  iconPadding: string;
}
