import React from "react"

import ControlPanel from "../../../components/ControlPanel/ControlPanelFC/ControlPanelFC"
import Header from "../../../components/Header/HeaderCC/index"
import KeypadFC from "../../../components/Keypad/KeypadFC/KeypadFC"
import { WrapperButtonsHistory } from "../styled"

// export const HomeFCContext = createContext()
export function HomeFC() {
  return (
    <>
      <Header />
      {/* <HomeFCContext.Provider value={item} /> */}
      <p>Hello, FC!</p>
      {/* </HomeFCContext.Provider> */}

      <WrapperButtonsHistory>
        <KeypadFC />
        <ControlPanel />
      </WrapperButtonsHistory>
    </>
  )
}
