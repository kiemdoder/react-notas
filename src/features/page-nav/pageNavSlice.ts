import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { sideNavItems } from "./side-nav-items";

export interface PageNavState {
  pageTitle: string;
}

const initialState: PageNavState = {
  pageTitle: "Component types",
};

export const pageNavSlice = createSlice({
  name: "pageNav",
  initialState,
  reducers: {
    gotoPage: (state, { payload }: PayloadAction<string>) => {
      state.pageTitle = payload;
    },
  },
});

export const { gotoPage } = pageNavSlice.actions;

//selectors
export const selectPageTitle = (state: RootState) => state.pageNav.pageTitle;
export const selectPageComponent = (state: RootState) =>
  sideNavItems.find((it) => it.label === state.pageNav.pageTitle)?.component ||
  sideNavItems[0].component;

export default pageNavSlice.reducer;
