import PropTypes from "prop-types"
import React, { Component } from "react"
import { DisplayInfo, DisplayResult } from "styled-components"

class DisplayCC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      result: "",
    }
  }

  render() {
    const { result, input } = this.props
    return (
      <>
        <DisplayResult>{result}</DisplayResult>
        <DisplayInfo>{input}</DisplayInfo>
      </>
    )
  }
}
DisplayCC.propTypes = {
  input: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
}
export default DisplayCC
