import React from "react";

export interface DemoParams {
  a: string;
  b: number;
  testFn: (i: number) => number;
}

export const params1: DemoParams = { a: "a", b: 1, testFn: (i) => i + 1 };
export const params2: DemoParams = { a: "AA", b: 2, testFn: (i) => i + 2 };

export const DemoContext = React.createContext<DemoParams>(params1);
