import React from "react";
import {
  AlternativeComponentGuardResult,
  Guard,
  GuardResultType,
  RedirectGuardResult,
} from "./guard";
import { Navigate } from "react-router-dom";

export interface GuardedParams {
  guards: Guard[];
  children: React.ReactNode;
}

export const Guarded = ({ guards, children }: GuardedParams) => {
  for (const guard of guards) {
    const guardResult = guard();
    switch (guardResult.type) {
      case GuardResultType.Continue:
        continue;

      case GuardResultType.Redirect:
        return <Navigate to={(guardResult as RedirectGuardResult).redirect} />;

      case GuardResultType.AlternativeComponent:
        return (guardResult as AlternativeComponentGuardResult).component;
    }
  }

  return <>{children}</>;
};
