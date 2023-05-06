import styled from "styled-components";
import { Colors } from './Colors'

export const projectsDiv = styled.div`
  h2 {
    margin: 50px 20px 10px 60px;
  }

  aside {
    margin: 40px 40px 100px 40px;
    border: 5px ridge black;
    padding: 40px;
    background-color: ${Colors.ter};    
  }
  `

export const ProjectLink = styled.div`
  border: 2px ridge black;
  height: 160px;
  background-color: black;
  margin: 5px;
  justify-content: center;
  h5 {
    margin: 5px 20px 10px;
  }
  img {
    margin: 5px 10px;
    width: 220px;
    cursor: pointer;
  }
`