import React, { useState } from "react"

import History from "../../History/HistoryFC/HistoryFC"
import { BtnHistory } from "../styled"

function ControlPanelFC() {
  const [active, setActive] = useState(false)

  const handleOPenHistoryClick = () => {
    setActive((prev) => !prev)
  }
  return (
    <>
      <BtnHistory onClick={handleOPenHistoryClick}>
        {active ? "▷" : "◁"}
      </BtnHistory>
      <History active={active} />
    </>
  )
}

export default ControlPanelFC
