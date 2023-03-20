import React from "react";

export interface Theme {
  buttonColor: string;
  buttonBackground: string;
}

export const lightTheme: Theme = {
  buttonColor: "#444",
  buttonBackground: "#ccc",
};

export const darkTheme: Theme = {
  buttonColor: "#ccc",
  buttonBackground: "#444",
};

export const ThemeContext = React.createContext<Theme>(lightTheme);
