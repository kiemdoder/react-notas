import { ContextSubComponent } from "./ContextSubComponent";
import React from "react";
import { DemoContext, params2 } from "./DemoContext";
import { DemoContext2, params22 } from "./DemoContext2";

export const ContextPage2 = () => {
  return (
    <DemoContext.Provider value={params2}>
      <DemoContext2.Provider value={params22}>
        <ContextSubComponent />
      </DemoContext2.Provider>
    </DemoContext.Provider>
  );
};
