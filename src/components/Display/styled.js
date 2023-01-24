import styled from "styled-components"

export const DisplayInfo = styled.p`
  text-align: right;
  padding-right: 40px;
  border-bottom: 3px solid #707070;
  font: normal normal normal 64px/77px "Kanit", sans-serif;
`

export const DisplayResult = styled.h6`
  /* margin-top: 20px; */
  margin-top: ${({ theme }) => theme.spaces[1] + theme.spaces[4]}px;
  text-align: right;
  padding-right: 40px;
  font: normal normal normal 64px/77px "Kanit", sans-serif;
`
