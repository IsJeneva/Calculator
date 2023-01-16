import PropTypes from "prop-types"
import React from "react"

import { DisplayInfo, DisplayResult } from "../styled"

function DisplayFC({ info, result }) {
  return (
    <>
      <DisplayResult>{result}</DisplayResult>
      <DisplayInfo>{info}</DisplayInfo>
    </>
  )
}
DisplayFC.propTypes = {
  info: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
}
export default DisplayFC
