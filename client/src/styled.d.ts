/* eslint-disable */

import "styled-components";
import { ThemeType } from "./theme";

type DefaultTheme = ThemeType;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
