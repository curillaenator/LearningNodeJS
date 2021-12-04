import {
  css,
  FlattenInterpolation,
  ThemedStyledProps,
  DefaultTheme,
} from "styled-components";

interface CssProps {
  disabled: boolean;
}

type StyleString = FlattenInterpolation<
  ThemedStyledProps<CssProps, DefaultTheme>
>;

interface Styles {
  body: { primary: StyleString; ghost: StyleString };
  title: { primary: StyleString; ghost: StyleString };
  bodyHover: { primary: StyleString; ghost: StyleString };
  bodyActive: { primary: StyleString; ghost: StyleString };
  iconHover: { primary: StyleString; ghost: StyleString };
  icon: { primary: StyleString; ghost: StyleString };
  iconActive: { primary: StyleString; ghost: StyleString };
}

export const styles: Styles = {
  body: {
    primary: css<CssProps>`
      background-color: ${({ theme, disabled }) =>
        disabled ? theme.bg.disabled : theme.bg.primary};
      box-shadow: ${({ theme, disabled }) =>
        disabled ? "none" : theme.shadows.buttonsColored};
    `,
    ghost: css<CssProps>`
      background-color: transparent;
      box-shadow: none;
    `,
  },

  title: {
    primary: css<CssProps>`
      color: ${({ theme, disabled }) =>
        disabled ? theme.text.gray : theme.text.dark};
    `,
    ghost: css<CssProps>`
      color: ${({ theme }) => theme.text.gray};
    `,
  },

  bodyHover: {
    primary: css<CssProps>`
      background-color: ${({ theme, disabled }) =>
        disabled ? theme.bg.disabled : theme.bg.primaryHover};
    `,
    ghost: css<CssProps>`
      background-color: transparent;
    `,
  },

  bodyActive: {
    primary: css<CssProps>`
      background-color: ${({ theme, disabled }) =>
        disabled ? theme.bg.disabled : theme.bg.primaryActive};
      box-shadow: ${({ theme, disabled }) =>
        disabled ? "none" : theme.shadows.buttonsColoredActive};
    `,
    ghost: css<CssProps>`
      background-color: transparent;
      box-shadow: none;
    `,
  },

  icon: {
    primary: css<CssProps>`
      &-light {
        fill: ${({ theme }) => theme.icons.light};
      }

      &-dark {
        fill: ${({ theme }) => theme.icons.dark};
      }
    `,

    ghost: css<CssProps>`
      &-light {
        fill: ${({ theme }) => theme.icons.primary};
      }

      &-dark {
        fill: ${({ theme }) => theme.icons.gray};
      }
    `,
  },

  iconHover: {
    primary: css<CssProps>``,
    ghost: css<CssProps>`
      &-light {
        fill: ${({ theme }) => theme.icons.primary};
      }

      &-dark {
        fill: ${({ theme }) => theme.icons.dark};
      }
    `,
  },

  iconActive: {
    primary: css<CssProps>``,
    ghost: css<CssProps>`
      &-light {
        fill: ${({ theme }) => theme.icons.primary};
      }

      &-dark {
        fill: ${({ theme }) => theme.icons.primaryActive};
      }
    `,
  },
};
