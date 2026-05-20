import styled from 'styled-components'
import back_head from '../assets/img/back_head.png'



export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  width: 70%;
  max-width: 1300px;
  height: auto;
padding-top: 80px;
  flex-wrap: wrap;
  gap: 20px;

 @media (max-width: 1280) {
  width: 50%;
 min-width: 0px;
 } 
`
  export const Imagem = styled.img`
    width: 100%;
  `
   export const Oferta = styled.div`
    width: 60%;

  @media (max-width: 900px) {
    width: 90%;
  }
`
