import PropTypes from "prop-types"
import React, { Component } from "react"

import { BtnClearHistory, HistoryPanel } from "../styled"

class History extends Component {
  render() {
    const { active } = this.props
    // console.log(active)
    return (
      <HistoryPanel active={active}>
        <BtnClearHistory>Clear history</BtnClearHistory>
      </HistoryPanel>
    )
  }
}
History.propTypes = {
  active: PropTypes.bool.isRequired,
}
export default History
