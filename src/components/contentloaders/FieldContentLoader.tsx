import React from "react";
import ContentLoader from "react-content-loader";
import styled from "styled-components";

const FieldLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width={120}
    height={12}
    viewBox="0 0 120 12"
    {...props}
  >
    <rect x="0" y="0" rx="6" ry="6" width="120" height="12" />
  </ContentLoader>
);

export const FieldContentLoader = styled(FieldLoader).attrs(({ theme }) => ({
  backgroundColor: theme.colors.ctrlBg,
  foregroundColor: theme.colors.ctrlDisabled,
}))``;
