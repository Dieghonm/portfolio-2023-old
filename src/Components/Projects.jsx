import Slider from 'react-styled-carousel';
// https://www.npmjs.com/package/react-styled-carousel
import AventurasFantasticas from '../img/Projetos/AventurasFantasticas.png'
import FacaFaquinha from '../img/Projetos/FacaFaquinha.png'
import GeradorDeQRCode from '../img/Projetos/GeradorDeQRCode.png'
import Pokedex from '../img/Projetos/Pokedex.png'
import * as S from '../style/Components/Projects'

function Projects() {

  const ProjectOppen = (url) => {
    window.open(url, "_blank");
  }

  return (
    <S.projectsDiv id="ProjectsDiv">
      <h2>Projects</h2>
      <aside>
          <S.ProjectLink onClick={() => ProjectOppen("https://dieghonm.github.io/aventuras-fantasticas/")}>
            <h5>Aventuras Fantasticas</h5>
            <img src={AventurasFantasticas} alt="imagem link para jogo aventuras fantasticas" />
          </S.ProjectLink>
          <S.ProjectLink onClick={() => ProjectOppen("https://dieghonm.github.io/faca-faquinha/")}>
            <h5>Jogo de sorte</h5>
            <img src={FacaFaquinha} alt="imagem link para jogo FacaFaquinha" />
          </S.ProjectLink>
          <S.ProjectLink onClick={() => ProjectOppen("https://dieghonm.github.io/QRCode/")}>
            <h5>Gerador de QR Code</h5>
            <img src={GeradorDeQRCode} alt="imagem link para jogo aventuras fantasticas" />
          </S.ProjectLink>
          <S.ProjectLink honClick={() => ProjectOppen("https://dieghonm.github.io/pokedex/")}>
            <h5>Pokedex</h5>
            <img src={Pokedex} alt="imagem link para Pokedex" />
          </S.ProjectLink>
      </aside>
    </S.projectsDiv>
  )
}

export default Projects