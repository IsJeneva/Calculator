import styled from "styled-components"

export const WrapperKeypad = styled.div`
  width: 100%;
  max-width: 700px;
`

export const KeypadContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  height: 80%;
  padding: 5px;
  /* margin: 10px 0; */
`

export const KeypadButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 30px;
  cursor: pointer;
  margin: 15px 0;
  border: 1px solid #707070;
  font: normal normal normal 32px/75px "Kanit", sans-serif;
  margin-top: 15%;
  background-color: #ffffff;

  &:hover {
    background: #808080;
  }
`
