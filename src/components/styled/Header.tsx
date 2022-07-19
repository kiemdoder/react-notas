import styled from "styled-components";

export interface HeaderProps {
  bg?: string;
}

export const Header = styled.header<HeaderProps>`
  background: ${({ bg, theme }) => bg || theme.colors.header};
  padding: 40px;

  h1 {
    color: darkslategray;
  }

  &:hover {
    background: #c47b44;
  }
`;
