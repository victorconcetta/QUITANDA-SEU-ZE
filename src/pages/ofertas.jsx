import * as S from './subpaginas.styles.jsx'
import * as Page from './ofertas.styles.jsx'
import DivComum from '../components/DivComum.jsx'
import styled from 'styled-components'
import { MdAttachMoney } from "react-icons/md";
import semana from '../assets/img/semana.png'
import ImagemZoom from '../components/ImagemZoom.jsx'

const DivComumFull = styled(DivComum)`
  width: auto;

`

function Home() {
  return (
    <div className="Subpagina">
      <S.Container>

<S.Head>
    <S.VIcon>
<MdAttachMoney />
    </S.VIcon>
  <h1>Ofertas da Semana</h1>
  </S.Head>
<Page.Oferta>
        <DivComumFull titulo="Confira as ofertas da semana do Seu Zé">
<ImagemZoom src={semana} alt="Ofertas da semana" className={Page.Imagem} />
        </DivComumFull>
</Page.Oferta>

      </S.Container>
    </div>
  )
}

export default Home