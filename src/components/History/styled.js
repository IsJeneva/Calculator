import styled from "styled-components"

export const HistoryPanel = styled.div`
  width: 250px;
  height: 600px;
  max-height: 650px;
  /* border: 2px solid #adff2f; */
  border: 2px solid #adff2f;
  display: ${({ active }) => (active ? "block" : "none")};
`

export const BtnClearHistory = styled.button`
  /* display: flex;
  justify-content: center;
  color: red; */
  transform: translateX(50%);
 
`
