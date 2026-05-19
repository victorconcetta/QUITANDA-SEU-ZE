import * as S from './subpaginas.styles.jsx'
import * as Page from './ofertas.styles.jsx'
import DivComum from '../components/DivComum.jsx'
import styled from 'styled-components'
import { MdAttachMoney } from "react-icons/md";
import semana from '../assets/img/semana.png'

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

        <DivComumFull titulo="Confira as ofertas da semana do Seu Zé">
          <Page.Imagem src={ semana } />
        </DivComumFull>


      </S.Container>
    </div>
  )
}

export default Home