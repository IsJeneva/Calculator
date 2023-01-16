import React, { Component } from "react"

import History from "../../History/HistoryCC/History"
import { BtnHistory } from "../styled"

class ControlPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      // panel: [],
    }
  }

  handleOPenHistoryClick = () => {
    this.setState((prev) => ({
      active: !prev.active,
      // panel: [...state.panel, "+"],
    }))
  }
  // handleOPenHistoryClick

  render() {
    const { active } = this.state
    return (
      <>
        <BtnHistory onClick={this.handleOPenHistoryClick}>
          {active ? "▷" : "◁"}
        </BtnHistory>
        <History active={active} />
      </>
    )
  }
}

export default ControlPanel
