import styled from "styled-components"

const HEADER_MAXWIDTH = 800

export const Wrapper = styled.div``

export const Header = styled.div`
  /* max-width: 800px; */
  max-width: ${HEADER_MAXWIDTH}px;
  width: 100%;
  /* min-height: 50px; */
  min-height: ${({ theme }) => theme.spaces[9]}px;
  /* max-height: 100px; */
  max-height: ${({ theme }) => theme.spaces[10]}px;
  background-color: #434343;
`

export const Content = styled.p``

export const BtnHome = styled.button`
  display: flex;
  align-items: center;
  border: none;
  /* height: 30px; */
  height: ${({ theme }) => theme.spaces[4] + theme.spaces[7]}px;
  background-color: #434343;
  color: white;
  /* font-size: 16px; */
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  align-items: flex-end;
`

export const TitleTheme = styled.label`
  /* height: 20px; */
  height: ${({ theme }) => theme.spaces[7]}px;
`

export const WrapperTitle = styled.div`
  margin-top: 1%;
  margin-left: 1%;
`
export const SelectList = styled.select`
  margin-left: 1%;
`

export const ListItem = styled.option``
