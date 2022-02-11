import { ComponentTypes } from "../../components/pages/ComponentTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface PageNavState {
  pageTitle: string;
  pageComponent: () => JSX.Element;
}

const initialState: PageNavState = {
  pageTitle: "Component types",
  pageComponent: ComponentTypes,
};

export const pageNavSlice = createSlice({
  name: "pageNav",
  initialState,
  reducers: {
    gotoPage: (
      state,
      {
        payload: { pageTitle, pageComponent },
      }: PayloadAction<{ pageTitle: string; pageComponent: () => JSX.Element }>
    ) => {
      state.pageTitle = pageTitle;
      state.pageComponent = pageComponent;
    },
  },
});

export const { gotoPage } = pageNavSlice.actions;

//selectors
export const selectPageTitle = (state: RootState) => state.pageNav.pageTitle;
export const selectPageComponent = (state: RootState) =>
  state.pageNav.pageComponent;

export default pageNavSlice.reducer;
