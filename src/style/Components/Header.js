import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  background-color: #313640;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0%;
  
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