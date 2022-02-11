import React from "react";

export interface SideNavItem {
  label: string;
  component: () => JSX.Element;
}
