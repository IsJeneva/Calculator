import PropTypes from "prop-types"
import React, { Component } from "react"

import { keysNumbers } from "../../../constants/keyButtons"
import { KeypadButton, KeypadContainer, WrapperKeypad } from "../styled"

class Keypad extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     keypadHandle: {},
  //   }
  // }

  handleOnDigit = (e) => {
    this.props.keypadHandle(e)
  }

  render() {
    return (
      <WrapperKeypad>
        <KeypadContainer>
          {keysNumbers.map((item, id) => (
            <KeypadButton key={id} onClick={this.handleOnDigit}>
              {item}
            </KeypadButton>
          ))}
        </KeypadContainer>
      </WrapperKeypad>
    )
  }
}
Keypad.propTypes = {
  keypadHandle: PropTypes.func.isRequired,
}
export default Keypad
