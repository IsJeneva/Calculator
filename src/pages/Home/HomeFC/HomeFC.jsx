import React from "react"

import ControlPanel from "../../../components/ControlPanel/ControlPanelFC/ControlPanelFC"
import Header from "../../../components/Header/HeaderCC/index"
import KeypadFC from "../../../components/Keypad/KeypadFC/KeypadFC"
import { WrapperButtonsHistory } from "../styled"

export function HomeFC() {
  return (
    <>
      <Header />
      <p>Hello, FC!</p>
      <WrapperButtonsHistory>
        <KeypadFC />
        <ControlPanel />
      </WrapperButtonsHistory>
    </>
  )
}
