import React, { Component } from "react"

import Header from "../../../components/Header/HeaderCC"
// import { colors } from "../../../constants/colors"
import {
  ListItem,
  SelectList,
  TitleTheme,
  Wrapper,
  WrapperTitle,
} from "../styled"

export class SettingsCC extends Component {
  constructor(props) {
    super(props)
    this.state = { value: "white" }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    const { value } = this.state
    return (
      <Wrapper>
        <Header />
        <WrapperTitle>
          <TitleTheme>
            Switch Theme:
            <SelectList value={value} onChange={this.handleChange}>
              {/* {colors.map(({ color }) => (
                <ListItem key={color} value={color}>
                  {color}
                </ListItem>
              ))} */}
              <ListItem value='white'>white</ListItem>
              <ListItem value='black'>black</ListItem>
              <ListItem value='color'>color</ListItem>
            </SelectList>
          </TitleTheme>
        </WrapperTitle>
      </Wrapper>
    )
  }
}
// export default SettingsCC
