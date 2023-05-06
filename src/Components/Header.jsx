import perfil from '../img/perfil.jpeg'
import * as S from '../style/Components/Header'

function Header() {
  return (
    <S.Header>
      <div>
        <S.FotoImg src={perfil} alt="Foto do Diegho" />
        <S.Name>Diegho Moraes</S.Name>
      </div>
      <div>
        <a href="#AboutDiv">Sobre</a>
        <a href="#SkillsDiv">Skills</a>
        <a href="#ProjectsDiv">Projetos</a>
        <a href="#ContactDiv">Contato</a>
      </div>
    </S.Header>
  )
}

export default Header