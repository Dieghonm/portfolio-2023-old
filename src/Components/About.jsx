import Foto from '../img/foto.jpeg'
import * as S from '../style/Components/About'

function About() {
  return (
    <S.Div>
      <h3>Olá, eu sou o Diegho</h3>
      <h1>E eu sou um criador e caçador de <i>bugs</i></h1>
      <h4>Sou programador e desenvolvedor web, meu trabalho e criar coisas para a web, trabalho com <i>front-end</i> e <i>back-end</i>, e agora estou aprendendo dados.</h4>
      <h4>Mas a maior parte do tempo eu passo caçando bugs e eu curto isso...</h4>
      <h5>Um pouco sobre mim</h5>
      <span>
        <div>
          <p>Desenvolvedor web movido pela curiosidade e prazer em criar coisas que vivem na internet.</p>
          <p>Meu interesse em desenvolvimento começou em 2000 quando um grupo de amigos decidiu criar <i>mod's</i> para um jogo online, na epoca não era tão simples encontrar materiais sobre programação e mesmo tendo aprendido algumas coisas, minha vida me levou por outros caminhos.</p>
          <p>No final de 2007 me formei em administração de empresas e trabalhei com isso em uma empresa pública até 2019, quando por oportunidade da pandemia eu resolvi finalmente estudar programação e me inscrevi na Trybe, onde aprendi os fundamentos que precisava para seguir com as minhas proprias pernas.</p>
          <p>Em 2022 tive o privilégio de trabalhar em duas <i>start-ups</i>, uma como desenvolvedor <i>front-end</i> e na outra como instrutor de <i>front-end.</i></p>
          <p>Sou apaixonado por resolver desafios lógicos e dar vida a ideias e projetos de produtos digitais, atualmente me dedico a ampliar meus conhecimentos com <i>back-end</i> e com outras linguagens como o <i>python</i>.</p>
        </div>
        <img src={Foto} alt="Foto do Diegho :)" />
      </span>
    </S.Div>
  )
}

export default About
