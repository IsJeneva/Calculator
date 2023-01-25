import styled from "styled-components"

// import theme from "../../theme"

const WRAPPERKEYPAD_MAXWIDTH = 700

export const WrapperKeypad = styled.div`
  width: 100%;
  /* max-width: 700px; */
  max-width: ${WRAPPERKEYPAD_MAXWIDTH}px;
`

export const KeypadContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  height: 80%;
  /* padding: 4px; */
  padding: ${({ theme }) => theme.spaces[2]};
  /* margin: 10px 0; */
`

export const KeypadButton = styled.button`
  /* width: 80px; */
  width: ${({ theme }) => theme.spaces[8] + theme.spaces[8]}px;
  /* height: 80px; */
  height: ${({ theme }) => theme.spaces[8] + theme.spaces[8]}px;
  border-radius: 30px;
  cursor: pointer;
  margin: 15px 0;
  border: 1px solid #707070;
  font: normal normal normal 32px/75px "Kanit", sans-serif;
  margin-top: 15%;
  /* background-color: #ffffff; */
  background-color: ${({ theme }) => theme.buttonColor};

  &:hover {
    /* background: #808080; */
    background: ${({ theme }) => theme.backgroundHover};
  }
`
