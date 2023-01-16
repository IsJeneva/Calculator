import React, { Component } from "react"

import ControlPanel from "../../../components/ControlPanel/ControlPanelCC/ControlPanel"
import Header from "../../../components/Header/HeaderCC"
import Keypad from "../../../components/Keypad/KeypadCC/Keypad"
import { WrapperButtonsHistory } from "../styled"

export class HomeCC extends Component {
  render() {
    return (
      <>
        <Header />
        <p>Hello, CC!</p>
        <WrapperButtonsHistory>
          <Keypad />
          <ControlPanel />
        </WrapperButtonsHistory>
      </>
    )
  }
}
// export default HomeCC
