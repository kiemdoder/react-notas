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

const Styledbox = styled.div`
  ${color}
  ${flex}
  ${layout}
  ${space}
`;

export interface TextProps
  extends ColorProps,
    FlexProps,
    LayoutProps,
    SpaceProps {
  children: React.ReactNode;
}
export const Box = ({ children, ...props }: TextProps) => (
  <Styledbox {...(props as any)}>{children}</Styledbox>
);
