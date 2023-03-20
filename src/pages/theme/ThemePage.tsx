import { darkTheme, lightTheme, ThemeContext } from "./ThemeContext";
import { useState } from "react";
import { ThemedButton } from "./ThemedButton";

export const ThemePage = () => {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeContext.Provider value={theme}>
      <h1>Theme</h1>
      <ThemedButton>Click me</ThemedButton>
      <button onClick={() => setTheme(lightTheme)}>Light theme</button>
      <button onClick={() => setTheme(darkTheme)}>Dark theme</button>
    </ThemeContext.Provider>
  );
};
