import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

// import { ThemeProvider } from "styled-components"
import App from "./components/App/App"
// import { allTheme } from "./theme"

// const theme = {
//   colors: {
//     main: "orange",
//     second: "green",
//   },
// }

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // <ThemeProvider theme={allTheme.white}>
  // <ThemeProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </ThemeProvider>,
)
