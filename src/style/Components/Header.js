import styled from "styled-components";
import { Colors } from './Colors'

export const Header = styled.header`
  display: flex;
  background-color: ${Colors.ter};
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0%;
  border-bottom: 2px solid black;
  z-index: 10;
  
  div {
    display: flex;
  }

  p {
    color: black;
    margin: 10px;
  }
`

export const FotoImg = styled.img`
  height: 100px;
  border-radius: 30%;
  margin: 5px;
`

export const Name = styled.h2`
  color: black;
  margin: 25px;
`