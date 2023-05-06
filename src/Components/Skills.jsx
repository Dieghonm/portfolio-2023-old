import {Css3} from '@styled-icons/boxicons-logos/Css3'
import {Docker} from '@styled-icons/boxicons-logos/Docker'

import {Git} from '@styled-icons/boxicons-logos/Git'
import {Html5} from '@styled-icons/boxicons-logos/Html5'
import {Python} from '@styled-icons/boxicons-logos/Python'
import {Redux} from '@styled-icons/boxicons-logos/Redux'
import {VisualStudio} from '@styled-icons/boxicons-logos/VisualStudio'
import {Rtl} from '@styled-icons/simple-icons/Rtl'
import {Styledcomponents} from '@styled-icons/simple-icons/Styledcomponents'
import {ReactLogo} from '@styled-icons/boxicons-logos/ReactLogo'
import {Jest} from '@styled-icons/simple-icons/Jest'
import {Javascript} from '@styled-icons/boxicons-logos/Javascript'
import {Eslint} from '@styled-icons/simple-icons/Eslint'
import {Typescript} from '@styled-icons/simple-icons/Typescript'
import {Linux} from '@styled-icons/fa-brands/Linux'
import {Cypress} from '@styled-icons/simple-icons/Cypress'
import {Mysql} from '@styled-icons/simple-icons/Mysql'
import {Nodejs} from '@styled-icons/boxicons-logos/Nodejs'
import {Mongodb} from '@styled-icons/simple-icons/Mongodb'
import {Sequelize} from '@styled-icons/simple-icons/Sequelize'
// https://styled-icons.dev/?s=emai

import * as S from '../style/Components/Skills'

function Skills() {
  return (
    <S.MainDiv id="SkillsDiv">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      <h2>Skills</h2>
      <span>
        <div>
          <Linux />
          <Git />
          <Docker />
          <VisualStudio />
          <Javascript />
          <Typescript />
          <Jest />
          <Eslint />
          <Python />
        </div>
        <div>
          <Html5 />
          <Css3 />
          <ReactLogo />
          <Rtl />
          <Redux />
          <Styledcomponents />
          <Cypress />
        </div>
        <div>
          <Nodejs />
          <Mysql />
          <Mongodb />
          <Sequelize />         
        </div>
      </span>
    </S.MainDiv>
  )
}

export default Skills