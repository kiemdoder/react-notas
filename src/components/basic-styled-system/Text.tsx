import "react-tippy/dist/tippy.css";
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
  typography,
  TypographyProps,
} from "styled-system";
import React, { useRef, useState } from "react";
import { Tooltip } from "react-tippy";

interface StyledTextProps {
  cursor?: string;
}

const StyledText = styled.span<StyledTextProps>`
  ${color}
  ${flex}
  ${layout}
  ${space}
  ${typography}
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: ${({ cursor }) => cursor};
`;

export interface TextProps
  extends ColorProps,
    FlexProps,
    LayoutProps,
    SpaceProps,
    StyledTextProps,
    TypographyProps {
  children: React.ReactNode;
  overflowToolTip?: string;
  className?: string;
}
export const Text = (props: TextProps) => {
  const { children, overflowToolTip } = props;
  const textRef = useRef<HTMLElement>();
  const [showToolTip, setShowToolTip] = useState(false);
  return (
    <Tooltip title={overflowToolTip} open={showToolTip}>
      <StyledText
        {...(props as any)}
        ref={textRef}
        onMouseEnter={() => {
          if (
            textRef.current &&
            textRef.current?.offsetWidth < textRef.current?.scrollWidth
          ) {
            setShowToolTip(true);
          }
        }}
        onMouseLeave={() => {
          setShowToolTip(false);
        }}
      >
        {children}
      </StyledText>
    </Tooltip>
  );
};
