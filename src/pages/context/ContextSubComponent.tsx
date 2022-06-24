import { useContext } from "react";
import { DemoContext } from "./DemoContext";
import { DemoContext2 } from "./DemoContext2";

export const ContextSubComponent = () => {
  const demoContext = useContext(DemoContext);
  const demoContext2 = useContext(DemoContext2);
  return (
    <>
      a: {demoContext.a}
      <br />
      b: {demoContext.b}
      <br />
      testFn: {demoContext.testFn(2)}
      <br />
      c: {demoContext2.c ? "TRUE" : "FALSE"}
    </>
  );
};
