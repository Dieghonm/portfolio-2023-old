import styled from "styled-components";
import { Colors } from './Colors'

export const ContactDiv = styled.div`
  background-color: ${Colors.quart};;
  color: ${Colors.ter};;
  display: flex;

  svg {
      width: 70px;
      margin: 20px;
    }

  form {
    display: flex;
    flex-direction: column;
    margin: 5px;
    width: 350px;
  }

  p {
    margin: 40px;
  }

`