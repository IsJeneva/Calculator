import PropTypes from "prop-types"
import React from "react"

import { BtnClearHistory, HistoryPanel } from "../styled"

function History({ active }) {
  return (
    <HistoryPanel active={active}>
      <BtnClearHistory>Clear history</BtnClearHistory>
    </HistoryPanel>
  )
}
History.propTypes = {
  active: PropTypes.bool.isRequired,
}

export default History
