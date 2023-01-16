import React, { Component } from "react"
import { NavLink } from "react-router-dom"

import { navigathion } from "../../../constants/navigathion"
// import History from "../../pages/History/History"
import {
  LinkHeader,
  NameCalculatorApp,
  Title,
  Wrapper,
  WrapperHeader,
} from "../styled"

class Header extends Component {
  render() {
    return (
      <WrapperHeader>
        <Wrapper>
          <NameCalculatorApp>Calculator App</NameCalculatorApp>
          <LinkHeader>
            {navigathion.map(({ path, name }) => (
              <NavLink key={name} to={path}>
                <Title>{name}</Title>
              </NavLink>
            ))}
          </LinkHeader>
        </Wrapper>
      </WrapperHeader>
    )
  }
}
export default Header
