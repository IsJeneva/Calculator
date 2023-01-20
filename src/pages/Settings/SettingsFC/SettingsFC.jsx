import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { handleSetColor } from "../../../actions"
import Header from "../../../components/Header/HeaderFC"
import { items } from "../../../constants/colors2"
import {
  ListItem,
  SelectList,
  TitleTheme,
  Wrapper,
  WrapperTitle,
} from "../styled"

const { black, color, white } = items

export function SettingsFC() {
  const [value, setValue] = useState(white)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setValue(e.target.value)
    dispatch(handleSetColor(e.target.value))
  }

  const colors = [white, black, color]

  return (
    <Wrapper>
      <Header />
      <WrapperTitle>
        <TitleTheme>
          Switch Theme:
          <SelectList onChange={handleChange} value={value}>
            {colors.map((e) => (
              <ListItem key={e} value={e}>
                {e}
              </ListItem>
            ))}
          </SelectList>
        </TitleTheme>
      </WrapperTitle>
    </Wrapper>
  )
}
