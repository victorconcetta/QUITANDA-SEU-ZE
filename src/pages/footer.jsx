import * as S from './footer.styles.jsx'
import logo from "../assets/img/logo.png"
import { Link, useLocation } from 'react-router-dom'
import { ListaProdutos } from './menu.jsx'
import vc from "../assets/img/vc.png"

function Footer() {

  return (
    <>
      <S.Container>
        <S.Start>
        <S.Left>
          <S.Head><img src={logo} /></S.Head><br />
          <h1>QUITANDA SEU ZÉ</h1>
          <p>o Frescor do Campo para Você</p>
          <p>Recuse imitações</p>
        </S.Left>


      <S.Center>

   <S.UlMenu>
            <h1>Menu</h1>
 <S.LiMenu><Link to="/">Home</Link></S.LiMenu>
<S.LiMenu><Link to="/ofertas">Ofertas</Link></S.LiMenu>
<S.LiMenu><Link to="/unidades">Unidades</Link></S.LiMenu>
<S.LiMenu><Link to="/contato">Contato</Link></S.LiMenu>
        </S.UlMenu>
<S.Produtos>
<h1>Produtos</h1>
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
        </S.Start>
        <S.End>
          <img src={vc} alt="logo empresa VC Soluções Tecnológicas" />
  <p>© 2026 VC Soluções Tecnológicas — Soluções modernas para empresas modernas.</p>
</S.End>
      </S.Container>
    


    </>
  )
}

export default Footer