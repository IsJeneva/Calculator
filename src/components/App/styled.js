import styled from "styled-components"

const CONTAINER_MAXWIDTH = 700
const CONTAINER_HEIGHT = 700

export const Container = styled.div`
  max-width: ${CONTAINER_MAXWIDTH}px;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: ${CONTAINER_HEIGHT}px;
  /* border: 2px solid grey; */
  border: ${({ theme }) => theme.spaces[1]}px solid grey;
  background-color: #e9e9e9;
  background-color: ${({ theme }) => theme.body};
`
