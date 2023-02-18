import React from "react";
import ContentLoader from "react-content-loader";
import styled from "styled-components";
import { space, layout, flexbox } from "styled-system";

const PropertiesLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width={760}
    height={200}
    viewBox="0 0 760 200"
    {...props}
  >
    <rect x="1" y="5" rx="4" ry="4" width="130" height="15" />
    <rect x="1" y="35" rx="4" ry="4" width="130" height="15" />
    <rect x="1" y="65" rx="4" ry="4" width="130" height="15" />
    <rect x="1" y="95" rx="4" ry="4" width="130" height="15" />
    <rect x="1" y="126" rx="4" ry="4" width="130" height="15" />
    <rect x="1" y="155" rx="4" ry="4" width="130" height="15" />
    <rect x="1" y="185" rx="4" ry="4" width="130" height="15" />
    <rect x="392" y="5" rx="4" ry="4" width="130" height="15" />
    <rect x="392" y="35" rx="4" ry="4" width="130" height="15" />
    <rect x="392" y="65" rx="4" ry="4" width="130" height="15" />
    <rect x="392" y="95" rx="4" ry="4" width="130" height="15" />
    <rect x="392" y="126" rx="4" ry="4" width="130" height="15" />
    <rect x="392" y="155" rx="4" ry="4" width="130" height="15" />
    <rect x="392" y="185" rx="4" ry="4" width="130" height="15" />
    <rect x="150" y="5" rx="8" ry="8" width="207" height="15" />
    <rect x="150" y="35" rx="8" ry="8" width="130" height="15" />
    <rect x="150" y="65" rx="8" ry="8" width="164" height="15" />
    <rect x="150" y="95" rx="8" ry="8" width="130" height="15" />
    <rect x="150" y="126" rx="8" ry="8" width="191" height="15" />
    <rect x="150" y="155" rx="8" ry="8" width="173" height="15" />
    <rect x="150" y="185" rx="8" ry="8" width="216" height="15" />
    <rect x="541" y="5" rx="8" ry="8" width="207" height="15" />
    <rect x="541" y="35" rx="8" ry="8" width="130" height="15" />
    <rect x="541" y="65" rx="8" ry="8" width="164" height="15" />
    <rect x="541" y="95" rx="8" ry="8" width="130" height="15" />
    <rect x="541" y="126" rx="8" ry="8" width="191" height="15" />
    <rect x="541" y="155" rx="8" ry="8" width="173" height="15" />
    <rect x="541" y="185" rx="8" ry="8" width="216" height="15" />
  </ContentLoader>
);

export const PropertiesContentLoader = styled(PropertiesLoader).attrs(
  ({ theme }) => ({
    backgroundColor: theme.colors.ctrlBg,
    foregroundColor: theme.colors.ctrlDisabled,
  })
)`
  ${space}
  ${layout}
  ${flexbox}
`;
