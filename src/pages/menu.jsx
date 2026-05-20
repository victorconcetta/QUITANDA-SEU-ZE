import * as S from './menu.styles.jsx'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../assets/img/logo.png"

export function ListaProdutos ({ itemComponent: Item = S.ListaProdutosLi, onItemClick }) {
  return (
    <S.ListaProdutos>
      <Item onClick={onItemClick}>Hortaliças</Item>
      <Item onClick={onItemClick}>Legumes</Item>
      <Item onClick={onItemClick}>Frutas</Item>
      <Item onClick={onItemClick}>Frutas Exóticas</Item>
      <Item onClick={onItemClick}>Doces do Campo</Item>
      <Item onClick={onItemClick}>Que-Queijo</Item>
      <Item onClick={onItemClick}>Café do Zé</Item>
    </S.ListaProdutos>
  )
}

function MenuPrincipal() {
  const [aberto, setAberto] = useState(false)
  const [subProdutos, setSubProdutos] = useState(false)
  const location = useLocation()
  const [subMobile, setSubMobile] = useState(false)

useEffect(() => {
  if (aberto) {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden' // ← trava o <html> também
  } else {
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }
  return () => {
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }
}, [aberto])

  const mostrarSub = subProdutos || location.pathname === '/sobre'

function fecharMenu() {
  setAberto(false)
  window.scrollTo({ top: 0, behavior: 'smooth' })  // ← volta pro topo
}
  return (
    <>
      <S.Container>
        <S.DivLogo><Link to="/"><img src={logo} /></Link></S.DivLogo>
        <S.UlMenu>
          <S.LiMenu><Link to="/" onClick={() => setSubProdutos(false)}>Home</Link></S.LiMenu>
          <S.LinhaVer />

          <S.LiMenu
            onMouseEnter={() => setSubProdutos(true)}
            onMouseLeave={() => setSubProdutos(false)}
          >
            Produtos
          </S.LiMenu>

          <S.LinhaVer />
          <S.LiMenu><Link to="/ofertas" onClick={() => setSubProdutos(false)}>Ofertas</Link></S.LiMenu>
          <S.LinhaVer />
          <S.LiMenu><Link to="/unidades" onClick={() => setSubProdutos(false)}>Unidades</Link></S.LiMenu>
          <S.LinhaVer />
          <S.LiMenu><Link to="/contato" onClick={() => setSubProdutos(false)}>Contato</Link></S.LiMenu>
        </S.UlMenu>

        <S.Hamburger onClick={() => setAberto(!aberto)}>
          <S.Linha />
          <S.Linha />
          <S.Linha />
        </S.Hamburger>
      </S.Container>

      {mostrarSub && (
        <S.SubProdutos
          onMouseEnter={() => setSubProdutos(true)}
          onMouseLeave={() => setSubProdutos(false)}
        >
   <ListaProdutos />
        </S.SubProdutos>
      )}

  {aberto && (
  <>
    <S.MenuMobile>
      <S.LiMenuMobile><Link to="/" onClick={fecharMenu}>Home</Link></S.LiMenuMobile>
      <S.LinhaHor />
      <S.LiMenuMobile onClick={() => setSubMobile(!subMobile)}>
        Produtos <S.SetaIcon $aberto={subMobile}>▼</S.SetaIcon>
      </S.LiMenuMobile>
<S.SubMobile $aberto={subMobile}>
  <ListaProdutos />
</S.SubMobile>
      <S.LinhaHor />
      <S.LiMenuMobile><Link to="/ofertas" onClick={fecharMenu}>Ofertas</Link></S.LiMenuMobile>
      <S.LinhaHor />
      <S.LiMenuMobile><Link to="/unidades" onClick={fecharMenu}>Unidades</Link></S.LiMenuMobile>
      <S.LinhaHor />
      <S.LiMenuMobile><Link to="/contato" onClick={fecharMenu}>Contato</Link></S.LiMenuMobile>
    </S.MenuMobile>
    <S.Overlay onClick={fecharMenu} />
  </>
)}
    </>
  )
}

export default MenuPrincipal