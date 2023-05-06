import styled from "styled-components";
import { Colors } from './Colors'

export const MainDiv = styled.div`
  scroll-margin-top: 140px;
  h2 {
    margin: 30px 20px 20px 60px;
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