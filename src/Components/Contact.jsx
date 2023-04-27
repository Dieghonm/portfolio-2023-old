import {Linkedin} from '@styled-icons/boxicons-logos/Linkedin'
import {Github} from '@styled-icons/boxicons-logos/Github'
import {Email} from '@styled-icons/evaicons-solid/Email'

import * as S from '../style/Components/Contact'

function Contact() {
  return (
    <S.ContactDiv>
      <h2>Contact</h2>
      <a href="https://www.linkedin.com/in/diegho-neves/"><Linkedin /></a>
      <a href="https://github.com/Dieghonm"><Github /></a>
      <a href=""><Email /></a>
    </S.ContactDiv>
  )
}

export default Contact