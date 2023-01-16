import React from "react"
import { Route, Routes } from "react-router-dom"

import { routes } from "../../constants/paths"
import { HomeCC, HomeFC, SettingsCC, SettingsFC } from "../../pages"
import { Container } from "./styled"

function App() {
  const { main, homeCC, settingsFC, settingsCC } = routes
  return (
    <Container>
      <Routes>
        <Route path={main} element={<HomeFC />} />
        <Route path={homeCC} element={<HomeCC />} />
        <Route path={settingsFC} element={<SettingsFC />} />
        <Route path={settingsCC} element={<SettingsCC />} />
      </Routes>
    </Container>
  )
}
export default App
