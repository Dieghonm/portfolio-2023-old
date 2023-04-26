import Foto from '../img/foto.jpeg'
import * as S from '../style/Components/About'

function About() {
  return (
    <S.Div>
      <h3>Olá, eu sou o Diegho</h3>
      <h1>E eu sou um criador e caçador de bugs</h1>
      <h4>Sou programador e desenvolvedor web, meu trabalho e criar coisas para a web, trabalho com front-end e back-end, e agora estou aprendendo dados</h4>
      <h4>Mas a maior parte do tempo eu passo caçando bugs e eu curto isso...</h4>
      <h5>Um pouco sobre mim</h5>
      <span>
        <div>
          <p>Desenvolvedor web movido pela curiosidade e prazer de criar coisas que vivem na internet.</p>
          <p>Meu interesse em desenvolvimento começou em 2000 quando um grupo de amigos decidiu criar mod's para um jogo online, na epoca nao era tão simples encontrar materiais sobre programação e mesmo tendo aprendido algumas coisas, minha vida me levou por outros caminhos.</p>
          <p>No final de 2007 me formei em administração de empresas e trabalhei comisso em uma empresa publica ate 2019, quando por oportunidade da pandemia eu resolvi finalmente estudar programação e me inscrevi na Trybe, onde aprendi os fundamentos que precisava para seguir com as minhas proprias pernas.</p>
          <p>Em 2022 tive o privilégio de trabalhar em duas start-ups, uma como desenvolvedor front-end e na outra como instrutor de front-end</p>
          <p>Sou apaixonado por resolver desafios logicos e dar vida a ideias e projetos de produtos digitais, atualmente me dedico a ampliar meus conhecimentos com back-end e com outras linguagens como o pythn</p>
        </div>
        <img src={Foto} alt="Foto do Diegho :)" />
      </span>
    </S.Div>
  )
}

export default About
