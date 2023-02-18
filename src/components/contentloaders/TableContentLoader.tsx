import React from "react";
import ContentLoader from "react-content-loader";
import styled from "styled-components";
import { space, layout, flexbox } from "styled-system";

const TableLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width={1083}
    height={387}
    viewBox="0 0 1083 387"
    {...props}
  >
    <rect x="0" y="13" rx="2" ry="2" width="86" height="11" />
    <rect x="111" y="13" rx="2" ry="2" width="193" height="11" />
    <rect x="539" y="13" rx="2" ry="2" width="120" height="11" />
    <rect x="726" y="13" rx="2" ry="2" width="120" height="11" />
    <rect x="879" y="13" rx="2" ry="2" width="143" height="11" />
    <rect x="0" y="63" rx="5" ry="5" width="73" height="11" />
    <rect x="111" y="63" rx="5" ry="5" width="402" height="11" />
    <rect x="539" y="63" rx="5" ry="5" width="146" height="11" />
    <rect x="726" y="63" rx="5" ry="5" width="125" height="11" />
    <rect x="879" y="63" rx="5" ry="5" width="199" height="11" />
    <rect x="0" y="123" rx="5" ry="5" width="73" height="11" />
    <rect x="111" y="123" rx="4" ry="4" width="367" height="11" />
    <rect x="539" y="123" rx="5" ry="5" width="146" height="11" />
    <rect x="726" y="123" rx="5" ry="5" width="125" height="11" />
    <rect x="879" y="123" rx="5" ry="5" width="180" height="11" />
    <rect x="0" y="184" rx="5" ry="5" width="73" height="11" />
    <rect x="111" y="184" rx="5" ry="5" width="387" height="11" />
    <rect x="539" y="184" rx="5" ry="5" width="146" height="11" />
    <rect x="726" y="184" rx="5" ry="5" width="125" height="11" />
    <rect x="879" y="184" rx="5" ry="5" width="163" height="11" />
    <rect x="0" y="244" rx="5" ry="5" width="73" height="11" />
    <rect x="111" y="244" rx="5" ry="5" width="338" height="11" />
    <rect x="539" y="244" rx="5" ry="5" width="146" height="11" />
    <rect x="726" y="244" rx="5" ry="5" width="125" height="11" />
    <rect x="879" y="244" rx="5" ry="5" width="199" height="11" />
    <rect x="0" y="305" rx="5" ry="5" width="73" height="11" />
    <rect x="111" y="305" rx="5" ry="5" width="402" height="11" />
    <rect x="539" y="305" rx="5" ry="5" width="146" height="11" />
    <rect x="726" y="305" rx="5" ry="5" width="125" height="11" />
    <rect x="879" y="305" rx="5" ry="5" width="181" height="11" />
    <rect x="0" y="355" rx="5" ry="5" width="73" height="11" />
    <rect x="111" y="355" rx="5" ry="5" width="371" height="10" />
    <rect x="539" y="355" rx="5" ry="5" width="146" height="11" />
    <rect x="726" y="355" rx="5" ry="5" width="125" height="11" />
    <rect x="879" y="355" rx="5" ry="5" width="162" height="11" />
    <path d="M 0.083 38.238 h 1078.234 v 2 H 0.083 z" />{" "}
  </ContentLoader>
);

export const TableContentLoader = styled(TableLoader).attrs(({ theme }) => ({
  backgroundColor: theme.colors.ctrlBg,
  foregroundColor: theme.colors.ctrlDisabled,
}))`
  ${space}
  ${layout}
  ${flexbox}
`;
