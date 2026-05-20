import * as S from './footer.styles.jsx'
import logo from "../assets/img/logo.png"

function Footer() {

  return (
    <>
      <S.Container>
        <S.Left>
          <S.Head><img src={logo} /></S.Head><br />
          <h1>QUITANDA SEU ZÉ</h1>
          <p>o Frescor do Campo para Você</p>
          <p>Recuse imitações</p>
        </S.Left>

        <S.Right>
          <ul>
            <li><h1>Lojas</h1></li>
            <li>Simpatia - Barra Bonita/SP</li>
            <li>Sem Limites - Bauru/SP</li>
            <li>Prudente - Marília/SP</li>
            <li>Macatuba - Macatuba/SP</li>
            <li>Brasil - Pederneiras/SP</li>
          </ul>
        </S.Right>
      </S.Container>

    </>
  )
}

export default Footer