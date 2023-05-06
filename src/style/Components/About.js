import styled from "styled-components";
import { Colors } from './Colors'

export const Div = styled.div`
  text-align: left;
  padding: 5px;
  
  h3 {
    margin: 110px 20px 10px 50px;
    font-family: Apple Chancery, cursive;
    /* https://www.w3.org/Style/Examples/007/fonts.pt_BR.html
    https://www.w3schools.com/cssref/tryit.php?filename=trycss_font-family */
  }
  
  h1 {
    margin: 10px 20px 10px 50px;
    font-family: Apple Chancery, cursive;
  }

  h4 {
    margin: 1px 20px 1px 50px;
    font-family: Apple Chancery, cursive;
  }

  h5 {
    margin: 30px 10px 1px 120px;
  }
  
  span {
    background-color: ${Colors.ter};
    color: ${Colors.black};
    display: flex;
    margin: 1px 100px 1px 100px;
    padding: 5px;
    border: 5px ridge black;
    img {
      height: 200px;
      border-radius: 50%;
      margin: 5px;
    }
    p {
      font-size: 0.85em;
      margin: 5px;
        /* 
      */
    } 
  }
`