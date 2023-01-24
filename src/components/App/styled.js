import styled from "styled-components"

export const Container = styled.div`
  max-width: 800px;
  /* max-width: ${({ theme }) => theme.spaces[3] * theme.spaces[4]}px; */
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  /* margin: auto; */
  height: 700px;
  border: 2px solid grey;
  background-color: #e9e9e9;
  background-color: ${({ theme }) => theme.body};
`
