import styled from "styled-components"

const HISTORYPANEL_WIDTH = 250
const HISTORYPANEL_HEIGHT = 600

export const HistoryPanel = styled.div`
  /* width: 250px; */
  width: ${HISTORYPANEL_WIDTH}px;
  /* height: 600px; */
  height: ${HISTORYPANEL_HEIGHT}px;
  max-height: 650px;
  /* border: 2px solid #adff2f; */
  /* border: 2px solid #adff2f; */
  border: ${({ theme }) => theme.spaces[1]}px solid #adff2f;
  display: ${({ active }) => (active ? "block" : "none")};
`

export const BtnClearHistory = styled.button`
  /* display: flex;
  justify-content: center;
  color: red; */
  transform: translateX(50%);
`
