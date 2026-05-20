import * as S from './footer.styles.jsx'
import logo from "../assets/img/logo.png"
import { Link, useLocation } from 'react-router-dom'
import { ListaProdutos } from './menu.jsx'

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


      <S.Center>
   <S.UlMenu>
          <S.LiMenu><Link to="/" onClick={() => setSubProdutos(false)}>Home</Link></S.LiMenu>
          <S.LiMenu><Link to="/ofertas" onClick={() => setSubProdutos(false)}>Ofertas</Link></S.LiMenu>
          <S.LiMenu><Link to="/unidades" onClick={() => setSubProdutos(false)}>Unidades</Link></S.LiMenu>
          <S.LiMenu><Link to="/contato" onClick={() => setSubProdutos(false)}>Contato</Link></S.LiMenu>
        </S.UlMenu>
<S.Produtos>
Produtos
<ListaProdutos />
  </S.Produtos>
        </S.Center>

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