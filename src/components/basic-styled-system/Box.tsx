import styled from "styled-components";

import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";
import React from "react";

const Styledbox = styled.div`
  ${color}
  ${flexbox}
  ${layout}
  ${space}
`;

export interface BoxProps
  extends ColorProps,
    FlexboxProps,
    LayoutProps,
    SpaceProps {
  children?: React.ReactNode;
  className?: string;
}
export const Box = ({ children, ...props }: BoxProps) => (
  <Styledbox {...(props as any)}>{children}</Styledbox>
);
