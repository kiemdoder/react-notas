import { ContextSubComponent } from "./ContextSubComponent";
import React from "react";
import { DemoContext, params1 } from "./DemoContext";
import { DemoContext2 } from "./DemoContext2";
import { params21 } from "./DemoContext2";

export const ContextPage1 = () => {
  return (
    <DemoContext.Provider value={params1}>
      <DemoContext2.Provider value={params21}>
        <ContextSubComponent />
      </DemoContext2.Provider>
    </DemoContext.Provider>
  );
};
