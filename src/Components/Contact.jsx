import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {Linkedin} from '@styled-icons/boxicons-logos/Linkedin'
import {Github} from '@styled-icons/boxicons-logos/Github'
import {Email} from '@styled-icons/evaicons-solid/Email'

import * as S from '../style/Components/Contact'

function Contact() {
  const [showEmail, setShowEmail] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k9kqio2', 'template_f5qahs9', form.current, 'MBRvGcLHWZWzy0r8Y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <S.ContactDiv id="ContactDiv">
      <a href="https://www.linkedin.com/in/diegho-neves/"><Linkedin /></a>
      <a href="https://github.com/Dieghonm"><Github /></a>
      <a onClick={() => setShowEmail(!showEmail)}><Email /></a>
      {console.log(showEmail)}
      {showEmail? 
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder='Name' />
        <input type="email" name="user_email" placeholder='Email' />
        <textarea name="message" placeholder='Message' />
        <input type="submit" value="Send" />
      </form>
        : null}
      <p>Email - dieghonm@gmail.com</p>
    </S.ContactDiv>
  )
}

export default Contact