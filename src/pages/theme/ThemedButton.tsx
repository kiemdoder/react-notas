import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export interface ThemedButtonProps {
  children: any;
}

export const ThemedButton = ({ children }: ThemedButtonProps) => {
  const theme = useContext(ThemeContext);

  return (
    <button
      style={{ color: theme.buttonColor, background: theme.buttonBackground }}
    >
      {children}
    </button>
  );
};
