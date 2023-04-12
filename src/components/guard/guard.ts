export enum GuardResultType {
  Continue,
  Redirect,
  AlternativeComponent,
}

export interface GuardResult {
  type: GuardResultType;
}

export const Continue: GuardResult = { type: GuardResultType.Continue };

export interface RedirectGuardResult extends GuardResult {
  redirect: string;
}

export function redirect(path: string): RedirectGuardResult {
  return {
    type: GuardResultType.Redirect,
    redirect: path,
  };
}

export interface AlternativeComponentGuardResult extends GuardResult {
  component: JSX.Element;
}

export function alternativeComponent(
  component: JSX.Element
): AlternativeComponentGuardResult {
  return {
    type: GuardResultType.AlternativeComponent,
    component,
  };
}

export type Guard = () => GuardResult;
