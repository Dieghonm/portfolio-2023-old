import styled from "styled-components";
import { Colors } from './Colors'

export const IconDiv = styled.div`
  color: beige;

  span{
    width: 140px;
    margin-top: 70px;
    background-color: ${Colors.ter};
    color: ${Colors.black};
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;

    /* opacity: 0; */
    transition: opacity 0.3s;
  }
`

