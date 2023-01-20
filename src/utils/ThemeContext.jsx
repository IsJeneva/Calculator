import { createContext } from "react"

export const THEMES = {
  white: "white",
  black: "black",
  color: "color",
}

export const ThemeContext = createContext({
  theme: THEMES.white,
//   toggleTheme: () => {},
})
