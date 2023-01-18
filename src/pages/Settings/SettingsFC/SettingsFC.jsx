import React, { useState } from "react"

// import { colors } from "../../../constants/colors"
import Header from "../../../components/Header/HeaderFC"
import {
  ListItem,
  SelectList,
  TitleTheme,
  Wrapper,
  WrapperTitle,
} from "../styled"

export function SettingsFC() {
  const [value, setValue] = useState("white")

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <Wrapper>
      <Header />
      <WrapperTitle>
        <TitleTheme>
          Switch Theme:
          <SelectList onChange={handleChange} value={value}>
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
