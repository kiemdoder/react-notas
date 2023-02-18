import styled from "styled-components";
import {
  color,
  ColorProps,
  flex,
  FlexProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";
import React from "react";

interface StyledTextProps {
  cursor: string;
}

const StyledText = styled.span<StyledTextProps>`
  ${color}
  ${flex}
  ${layout}
  ${space}
  cursor: ${({ cursor }) => cursor}
`;

export interface TextProps
  extends ColorProps,
    FlexProps,
    LayoutProps,
    SpaceProps,
    StyledTextProps {
  children: React.ReactNode;
}
export const Text = (props: TextProps) => {
  const { children } = props;
  return <StyledText {...(props as any)}>{children}</StyledText>;
};
