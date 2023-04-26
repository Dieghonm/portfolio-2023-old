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
        <p>Sobre</p>
        <p>Skills</p>
        <p>Projetos</p>
        <p>Contato</p>
      </div>
    </S.Header>
  )
}

export default Header