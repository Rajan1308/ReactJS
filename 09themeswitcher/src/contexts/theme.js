import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
})

export const ThemeProvide = ThemeContext.Provider


// Custom Hook
export default function useTheme() {
  return useContext(ThemeContext)
}