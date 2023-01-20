import React from "react"
import ReactDOM from "react-dom/client"
import { Provider, useSelector } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import App from "./components/App/App"
import { blackTheme, colorTheme, whiteTheme } from "./constants/colors"
import { store } from "./store"
import theme from "./theme"

const root = ReactDOM.createRoot(document.getElementById("root"))

function RootComponent() {
  const color = useSelector((state) => state.theme)
  const obj = {
    white: whiteTheme,
    black: blackTheme,
    color: colorTheme,
  }
  return (
    <ThemeProvider theme={{ ...obj[color], ...theme }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  )
}
root.render(
  <Provider store={store}>
    <RootComponent />
  </Provider>,
)
