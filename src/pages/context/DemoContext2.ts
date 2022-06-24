import React from "react";

export interface DemoParams2 {
  c: boolean;
}

export const params21: DemoParams2 = { c: true };
export const params22: DemoParams2 = { c: false };

export const DemoContext2 = React.createContext(params21);
