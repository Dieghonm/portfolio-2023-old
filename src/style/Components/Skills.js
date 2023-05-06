import styled from "styled-components";
import { Colors } from './Colors'

export const MainDiv = styled.div`
  h4 {
    margin: 50px 20px 10px 150px;
  }
  span {
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    background-color: ${Colors.quart};;
    width: 100%;
    flex-wrap: wrap;
    svg {
      color: ${Colors.ter};;
      width: 70px;
      margin: 20px;
      
    }
  }
`