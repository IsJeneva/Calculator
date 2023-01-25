import styled from "styled-components"

const WRAPPERHEADER_MAXWIDTH = 800
const LINKHEADER_MAXWIDTH = 350

export const WrapperHeader = styled.div`
  /* max-width: 800px; */
  max-width: ${WRAPPERHEADER_MAXWIDTH}px;
  width: 100%;
  /* min-height: 50px; */
  min-height: ${({ theme }) => theme.spaces[9]}px;
  max-height: 100px;
  background-color: #434343;
  background-color: ${({ theme }) => theme.headerColor};
`

export const Wrapper = styled.div`
  width: 90%;
  /* min-height: 50px; */
  min-height: ${({ theme }) => theme.spaces[9]}px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`
export const NameCalculatorApp = styled.p`
  color: white;
  margin: 0;
  /* height: 30px; */
  height: ${({ theme }) => theme.spaces[4] + theme.spaces[7]}px;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  /* line-height: 30px; */
  line-height: ${({ theme }) => theme.spaces[4] + theme.spaces[7]}px;
`

export const LinkHeader = styled.button`
  /* max-width: 350px; */
  max-width: ${LINKHEADER_MAXWIDTH}px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  border: none;
  outline: none;
  /* height: 30px; */
  height: ${({ theme }) => theme.spaces[4] + theme.spaces[7]}px;

  // border: 1px solid red;
  /* background-color: #434343; */
  color: white;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  background-color: ${({ theme }) => theme.headerColor};
`
export const Title = styled.p`
  color: #ffffff;
`

export const BtnHome = styled.button`
  /* width: 40px; */
  width: ${({ theme }) => theme.fontSizes[8]}px;
  border: 1px solid red;
`

export const BtnSetting = styled.button`
  /* width: 40px; */
  width: ${({ theme }) => theme.fontSizes[8]}px;
  border: 1px solid red;
`
// export const History = styled.button`
//   width: 40px;
//   border: 1px solid red;
//   color: #ffffff;
// `
