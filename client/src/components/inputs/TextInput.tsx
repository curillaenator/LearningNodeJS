import React, { FC, useState, useRef, useCallback, ChangeEvent } from "react";
import styled from "styled-components";

// import { BtnGhost } from "../buttons";

import { inputIcons } from "./assets/icons";
import { IInputStyled, TextInputProps } from "./interfaces";

const InputStyled = styled.div<IInputStyled>`
  position: relative;
  width: 100%;

  .input {
    position: relative;
    display: flex;
    width: 100%;
    gap: 1rem;
    margin-bottom: 4px;

    .input_icon {
      margin-top: 4px;
      flex-shrink: 0;

      &-light {
        transition: 0.08s linear;
        fill: ${({ theme, isFocused }) =>
          isFocused ? theme.primary[200] : theme.icons.light};
      }

      &-dark {
        transition: 0.08s linear;
        fill: ${({ theme, isFocused }) =>
          isFocused ? theme.primary[500] : theme.icons.dark};
      }
    }

    /* &-button {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    } */

    &-input {
      width: 100%;
      height: 36px;
      padding: 4px
        ${({ buttonWidth }) => (buttonWidth ? `${buttonWidth + 4}px` : "4px")}
        8px 4px;
      transition: 0.08s ease-in-out;
      font-style: normal;
      /* font-variation-settings: "GRAD" 400, "wght" 500; */
      letter-spacing: 0.002em;
      font-size: 14px;
      line-height: 24px;
      background: none;
      color: ${({ theme }) => theme.text.dark};
      border-bottom: 1px solid
        ${({ theme, isFocused, state }) => {
          switch (true) {
            case isFocused:
              return theme.primary[400];
            case state === "error":
              return theme.text.danger;
            default:
              return theme.lines;
          }
        }};

      &::placeholder {
        color: ${({ theme, state }) => {
          switch (true) {
            case state === "error":
              return theme.text.danger;
            default:
              return theme.text.placeholder;
          }
        }};
      }
    }
  }

  .subinput {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 1rem;
    padding-left: ${({ isIcon }) => (isIcon ? "40px" : "none")};
    font-size: 11px;

    &-text {
      color: ${({ theme, state }) => {
        switch (true) {
          case state === "error":
            return theme.text.danger;
          default:
            return theme.text.placeholder;
        }
      }};
      padding: 0 4px;
    }
  }
`;

export const TextInput: FC<TextInputProps> = ({
  state = "normal",
  iconName,
  type = "text",
  name,
  description,
  placeholder = "",
  value,
  limitSymbols,
  // buttonTitle,
  // withButton = false,
  onChange,
  onFocusOut,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputButtonRef = useRef<HTMLButtonElement | null>(null);

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    !!inputRef.current && inputRef.current.focus();
    setIsFocused(true);
  };

  const handleBlur = () => {
    !!inputRef.current && inputRef.current.blur();
    !!onFocusOut && onFocusOut();
    setIsFocused(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (limitSymbols && e.target.value.length >= limitSymbols) return;
    onChange(e.target.value);
  };

  const getIcon = useCallback(() => {
    const iconSet = {
      normal: iconName ? inputIcons[iconName] : "",
      success: inputIcons.success,
      error: inputIcons.error,
    };

    return iconSet[state];
  }, [state, iconName]);

  return (
    <InputStyled
      state={state}
      isIcon={!!iconName}
      tabIndex={0}
      isFocused={isFocused}
      hasValue={!!value.length}
      buttonWidth={inputButtonRef.current?.clientWidth || 0}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div className="input">
        {!!iconName && getIcon()}

        <input
          ref={inputRef}
          className="input-input"
          type={type}
          name={name}
          placeholder={placeholder}
          autoComplete="off"
          value={value}
          onChange={handleChange}
        />

        {/* {withButton && (
          <div className="input-button">
            <BtnGhost
              ref={inputButtonRef}
              title={buttonTitle || ""}
              colorPreset="secondary-colors"
              handler={() => {}}
            />
          </div>
        )} */}
      </div>

      <div className="subinput">
        <span className="subinput-text">{description || ""}</span>

        {limitSymbols && (
          <span className="subinput-text">{`${value.length}/${limitSymbols}`}</span>
        )}
      </div>
    </InputStyled>
  );
};
