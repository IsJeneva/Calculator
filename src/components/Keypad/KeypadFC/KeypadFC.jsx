import PropTypes from "prop-types"
import React from "react"

import { keysNumbers } from "../../../constants/keyButtons"
import { KeypadButton, KeypadContainer, WrapperKeypad } from "../styled"

function KeypadFC({ keypadHandle }) {
  const handleOnDigit = (e) => {
    keypadHandle(e)
  }

  return (
    <WrapperKeypad>
      <KeypadContainer>
        {keysNumbers.map((item, id) => (
          <KeypadButton key={id} onClick={handleOnDigit}>
            {item}
          </KeypadButton>
        ))}
      </KeypadContainer>
    </WrapperKeypad>
  )
}
KeypadFC.propTypes = {
  keypadHandle: PropTypes.func.isRequired,
}
export default KeypadFC
