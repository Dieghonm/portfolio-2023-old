import styled from "styled-components";
import { Colors } from './Colors'

export const projectsDiv = styled.div`
  scroll-margin-top: 120px;
  h2 {
    margin: 30px 20px 0px 60px;
  }

  aside {
    display: flex;
    margin: 20px 40px 50px 40px;
    border: 5px ridge black;
    padding: 40px;
    background-color: ${Colors.ter};    
  }
  `

export const ProjectLink = styled.div`
  cursor: pointer;
  border: 2px ridge black;
  height: 160px;
  width: 240px;
  background-color: black;
  margin: 5px;
  justify-content: center;

  h5 {
    margin: 5px 20px 10px;
  }
  img {
    margin: 5px 10px;
    width: 220px;
  }
`