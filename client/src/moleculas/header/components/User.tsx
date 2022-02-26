import React, { forwardRef } from "react";
import styled from "styled-components";

interface UserStyledProps {
  active: boolean;
}

const UserStyled = styled.div<UserStyledProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  .user-name {
    white-space: nowrap;
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.text.light};
  }

  .user-avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
    transition: 0.12s linear;
    box-shadow: 0 0 0 4px
      ${({ theme, active }) => (active ? theme.bg.gray : "none")};
  }

  &:hover {
    .user-avatar {
      box-shadow: 0 0 0 4px ${({ theme }) => theme.bg.primary};
    }
  }

  &:active {
    .user-avatar {
      box-shadow: 0 0 0 4px ${({ theme }) => theme.bg.primaryActive};
    }
  }
`;

interface UserProps {
  open: boolean;
  name: string;
  avatarURL: string;
}

const User = forwardRef<HTMLDivElement, UserProps>((props, ref) => {
  const { open, name, avatarURL } = props;

  return (
    <UserStyled ref={ref} active={open}>
      <span className="user-name">{name || "N/A"}</span>

      <img
        className="user-avatar"
        src={avatarURL || "https://my-engine.ru/modules/users/avatar.png"}
        alt="Аватар"
      />
    </UserStyled>
  );
});

User.displayName = "User";

export { User };
