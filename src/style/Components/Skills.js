import styled from "styled-components";
import { Colors } from './Colors'

export const MainDiv = styled.div`
  scroll-margin-top: 120px;
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
    padding: 20px;
  }
`

export const SkillsgroupDiv = styled.div`
display: flex;
`

export const IconDiv = styled.div`
  color: ${Colors.ter};;
  width: 70px;
  margin: 0px 20px;
  :hover {
    color: ${Colors.prim};
  }
`

export const TooltipBox = styled.div`
  visibility: hidden;
  &:before {
    content: "";
    top: -10px;
    position: absolute;
  }
`

export const SkillDiv = styled.div`
  & ${IconDiv}:hover + ${TooltipBox} {
    visibility: visible;
    background-color: ${Colors.ter};
    color: ${Colors.prim};
    text-align: center;
    /* position: absolute; */
    z-index: 1;
    /* margin-top: 70px; */
    border-radius: 6px;
    padding: 2px;
    /* opacity: 0; */
    transition: opacity 0.5s;

    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8)
        rgba(0, 0, 0, 0.8);
    }
  }

`