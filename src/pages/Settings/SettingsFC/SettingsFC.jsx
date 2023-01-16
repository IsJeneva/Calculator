import React, { useState } from "react"

// import { colors } from "../../../constants/colors"
import Header from "../../../components/Header/HeaderFC"
import {
  ListItem,
  OpeningList,
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
          <OpeningList onChange={handleChange} value={value}>
            {/* {colors.map(({ color }) => (
              <ListItem key={color} value={color}>
                {color}
              </ListItem>
            ))} */}
            <ListItem value='white'>white</ListItem>
            <ListItem value='black'>black</ListItem>
            <ListItem value='color'>color</ListItem>
          </OpeningList>
        </TitleTheme>
      </WrapperTitle>
    </Wrapper>
  )
}
// export default SettingsFC

// // ----------------------------------------------
// import React from "react"
// // import { useState } from "react"
// // import { ThemeContext } from "../../../constants/colors"

// import Header from "../../../components/Header/HeaderFC"
// import {
//   Wrapper,
//   TitleTheme,
//   WrapperTitle,
//   OpeningList,
//   ListItem,
// } from "../styled"

// const SettingsFC = () => {
//   return (
//     <>
//       <ThemeContext.Consumer>
//         <Wrapper>
//           <Header />
//           <WrapperTitle>
//             <TitleTheme>
//               Switch Theme:
//               {({ theme, toggleTheme }) => (
//                 <OpeningList
//                   onChange={toggleTheme.bind(this)}
//                   defaultValue={theme}
//                 >
//                   <ListItem value='white'>Light Theme</ListItem>
//                   <ListItem value='black'>Dark Theme</ListItem>
//                   <ListItem value='colored'>Colored Theme</ListItem>
//                 </OpeningList>
//               )}
//             </TitleTheme>
//           </WrapperTitle>
//         </Wrapper>
//       </ThemeContext.Consumer>
//     </>
//   )
// }
// export default SettingsFC
