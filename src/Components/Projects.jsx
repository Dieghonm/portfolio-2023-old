import Slider from 'react-styled-carousel';
// https://www.npmjs.com/package/react-styled-carousel
import AventurasFantasticas from '../img/Projetos/AventurasFantasticas.png'
import FacaFaquinha from '../img/Projetos/FacaFaquinha.png'
import * as S from '../style/Components/Projects'

function Projects() {
  const responsive = [
    { breakPoint: 1280, cardsToShow: 10 },
    { breakPoint: 760, cardsToShow: 4 },
  ];

  return (
    <S.projectsDiv >
      <h2>Projects</h2>
      <aside>
        <Slider responsive={responsive}>
          <a href="https://dieghonm.github.io/aventuras-fantasticas/"><img src={AventurasFantasticas} alt="imagem link para jogo aventuras fantasticas" /></a>
          <a href="https://dieghonm.github.io/faca-faquinha/"><img src={FacaFaquinha} alt="imagem link para jogo FacaFaquinha" /></a>
        
          <a href="https://dieghonm.github.io/aventuras-fantasticas/"><img src={AventurasFantasticas} alt="imagem link para jogo aventuras fantasticas" /></a>
          <a href="https://dieghonm.github.io/faca-faquinha/"><img src={FacaFaquinha} alt="imagem link para jogo FacaFaquinha" /></a>
          <a href="https://dieghonm.github.io/aventuras-fantasticas/"><img src={AventurasFantasticas} alt="imagem link para jogo aventuras fantasticas" /></a>
          <a href="https://dieghonm.github.io/faca-faquinha/"><img src={FacaFaquinha} alt="imagem link para jogo FacaFaquinha" /></a>
          <a href="https://dieghonm.github.io/aventuras-fantasticas/"><img src={AventurasFantasticas} alt="imagem link para jogo aventuras fantasticas" /></a>
          <a href="https://dieghonm.github.io/faca-faquinha/"><img src={FacaFaquinha} alt="imagem link para jogo FacaFaquinha" /></a>
          <a href="https://dieghonm.github.io/aventuras-fantasticas/"><img src={AventurasFantasticas} alt="imagem link para jogo aventuras fantasticas" /></a>
          <a href="https://dieghonm.github.io/faca-faquinha/"><img src={FacaFaquinha} alt="imagem link para jogo FacaFaquinha" /></a>
        </Slider>

      </aside>
    </S.projectsDiv>
  )
}

export default Projects