import * as S from './subpaginas.styles.jsx'
import * as Page from './unidades.styles.jsx'
import styled from 'styled-components'
import DivComum from '../components/DivComum.jsx'
import loja_barrabonita from '../assets/img/loja_barrabonita.png'
import loja_marilia from '../assets/img/loja_marilia.png'
import loja_macatuba from '../assets/img/loja_macatuba.png'
import loja_brasil from '../assets/img/loja_brasil.png'
import loja_semlimites from '../assets/img/loja_semlimites.png'
import loja_redentor from '../assets/img/loja_redentor.png'


import { FaStore } from "react-icons/fa";

const DivComumFull = styled(DivComum)`
  width: 95%;
`

function Home() {
  return (
    <div className="Subpagina">
      <S.Container>

<S.Head>
    <S.VIcon>
        <FaStore />
    </S.VIcon>
  <h1>Nossas Unidades</h1>
  </S.Head>

  <Page.Container>
    <Page.Texto><strong>A Quitanda Seu Zé está sempre perto de você!</strong><br /><br />
Nascida no interior paulista, a Quitanda Seu Zé cresceu junto com a nossa gente e hoje está presente em vários pontos da região — sempre pertinho de você, com frutas, legumes e verduras fresquinhos, direto da roça para a sua mesa.
Venha nos visitar na unidade mais próxima!</Page.Texto>


<Page.Loja>
  <img src={loja_barrabonita} alt="Loja Barra Bonita" />
  <p>LOJA SIMPATIA<br />
  Barra Bonita - SP</p>
    <Page.LojaInfo>
    <p>Endereço: Rua Winifrida, 345<br />
    Horário: 08h às 18h</p>
     </Page.LojaInfo>
</Page.Loja>
<Page.Loja>
  <img src={loja_semlimites} alt="Loja Sem Limites" />
  <p>LOJA SEM LIMITES<br />
  Bauru - SP</p>
    <Page.LojaInfo>
    <p>Endereço: Rua Gerson França, 15-23<br />
    Horário: 08h às 20h</p>
     </Page.LojaInfo>
</Page.Loja>
<Page.Loja>
  <img src={loja_marilia} alt="Loja Prudente" />
  <p>LOJA PRUDENTE<br />
  Marília - SP</p>
    <Page.LojaInfo>
    <p>Endereço: Rua Prudente de Moraes, 454<br />
    Horário: 08h às 18h</p>
     </Page.LojaInfo>
</Page.Loja>
<Page.Loja>
  <img src={loja_macatuba} alt="Loja Macatuba" />
  <p>LOJA MACATUBA<br />
Macatuba - SP</p>
    <Page.LojaInfo>
    <p>Endereço: Rua Osório Peixoto, 1123<br />
    Horário: 08h às 18h</p>
     </Page.LojaInfo>
</Page.Loja>

<Page.Loja>
  <img src={loja_brasil} alt="Loja Pederneiras" />
  <p>LOJA BRASIL<br />
  Pederneiras - SP</p>
    <Page.LojaInfo>
    <p>Endereço: Av. Brasil, 557<br />
    Horário: 08h às 18h</p>
     </Page.LojaInfo>
</Page.Loja>
<Page.Loja>
  <img src={loja_redentor} alt="Loja Redentor" />
  <p>Em Breve<br />
  LOJA REDENTOR<br />
  Assis - SP</p>
    <Page.LojaInfo>
    <p>Em Breve...</p>
     </Page.LojaInfo>
</Page.Loja>
  </Page.Container>


      </S.Container>
    </div>
  )
}

export default Home