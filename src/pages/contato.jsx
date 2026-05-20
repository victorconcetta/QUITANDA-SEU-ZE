import * as S from './subpaginas.styles.jsx'
import * as Page from './contato.styles.jsx'
import { FaMobileAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { GiTalk } from "react-icons/gi";
import loja_barrabonita from '../assets/img/loja_barrabonita.png'
import loja_marilia from '../assets/img/loja_marilia.png'
import loja_macatuba from '../assets/img/loja_macatuba.png'
import loja_brasil from '../assets/img/loja_brasil.png'
import loja_semlimites from '../assets/img/loja_semlimites.png'
import loja_redentor from '../assets/img/loja_redentor.png'
import UnidadeCard from '../components/UnidadeCard.jsx'

function Home() {
  return (
    <div className="Subpagina">
      <S.Container>
        <S.Head>
          <S.VIcon>
            <FaMobileAlt />
          </S.VIcon>
          <h1>Contato</h1>
        </S.Head>

        <Page.Container>
          <Page.Head>
          <Page.Div>
            <Page.DivHead><h1><FaWhatsapp /></h1><h2>Central de atendimento</h2></Page.DivHead>
            <Page.DivText><p>(14) 99693-9090 - WhatsApp</p></Page.DivText>
          </Page.Div>
<Page.DivLine></Page.DivLine>
          <Page.Div>
            <Page.DivHead><h1><GiTalk /></h1><h2>Ouvidoria</h2></Page.DivHead>
            <Page.DivText><p>ouvidoria@seuze.com.br</p></Page.DivText>
          </Page.Div>
<Page.DivLine></Page.DivLine>
            <Page.Div>
            <Page.DivHead><h1><FaTruck /></h1><h2>Fornecedores</h2></Page.DivHead>
            <Page.DivText><p>(14) 99693-8080 - WhatsApp</p>
            <p>fornecedor@seuze.com.br</p></Page.DivText>
          </Page.Div>
          </Page.Head>

<Page.Unidades>
<UnidadeCard
  titulo="Loja Simpatia"
  descricao={
    <>
    <PAGE.P>Endereço: Rua Winifrida, 345</PAGE.P>
    <PAGE.P>WhatsApp / Telefone: (14)99090-4123</PAGE.P>
    <PAGE.P>E-mail: simpatia@seuze.com.br</PAGE.P>
    </>
    }
  imagem={loja_barrabonita}
  altImagem="Loja Barra Bonita"
/>

<UnidadeCard
  titulo="Loja Sem Limites"
  descricao={
    <>
    <PAGE.P>Endereço: Rua Gerson França, 15-23</PAGE.P>
    <PAGE.P>WhatsApp / Telefone: (14)99090-2088</PAGE.P>
    <PAGE.P>E-mail: semlimites@seuze.com.br</PAGE.P>
    </>
    }
  imagem={loja_semlimites}
  altImagem="Loja Bauru"
/>

<UnidadeCard
  titulo="Loja Prudente"
  descricao={
    <>
    <PAGE.P>Endereço: Rua Prudente de Moraes, 454</PAGE.P>
    <PAGE.P>WhatsApp / Telefone: (14)99490-4293</PAGE.P>
    <PAGE.P>E-mail: prudente@seuze.com.br</PAGE.P>
    </>
    }
  imagem={loja_marilia}
  altImagem="Loja Marília"
/>

<UnidadeCard
  titulo="Loja Macatuba"
  descricao={
    <>
    <PAGE.P>Endereço: Rua Osório Peixoto, 1123</PAGE.P>
    <PAGE.P>WhatsApp / Telefone: (14)99050-3311</PAGE.P>
    <PAGE.P>E-mail: macatuba@seuze.com.br</PAGE.P>
    </>
    }
  imagem={loja_macatuba}
  altImagem="Loja Macatuba"
/>

<UnidadeCard
  titulo="Loja Brasil"
  descricao={
    <>
    <PAGE.P>Endereço: Av. Brasil, 557</PAGE.P>
    <PAGE.P>WhatsApp / Telefone: (14)99090-4013</PAGE.P>
    <PAGE.P>E-mail: brasil@seuze.com.br</PAGE.P>
    </>
    }
  imagem={loja_brasil}
  altImagem="Loja Pederneiras"
/>
</Page.Unidades>
        </Page.Container>
      </S.Container>
    </div>
  )
}

export default Home