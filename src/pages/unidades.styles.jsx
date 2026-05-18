import styled from 'styled-components'
import back_head from '../assets/img/back_head.png'


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  width: 70%;
  max-width: 1500px;
  min-width: 900px;
  height: auto;
padding-top: 80px;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 900px) {
    min-width: unset;
    width: 90%;
  }
`
export const Loja = styled.div`
  width: calc(33.333% - 14px);
  flex-shrink: 0;
  height: auto;
  position: relative;
   overflow: hidden;

  img {
    width: 100%;
    display: block;
    opacity: 0.9;
    transition: opacity 0.3s ease;
  }

  p {
    position: absolute;
    top: 0px;
    left: 0px;
    font-size: 20px;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    padding: 4px 8px;
    border-radius: 4px;
  }

 &:hover img{
    opacity: 1;
 }
  &:hover > p{
    display: none;
 } 

   @media (max-width: 900px) {
    width: 100%;  /* ← cada card ocupa a linha inteira */
  }
`
export const LojaInfo = styled.div`
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: auto;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 16px;
  transition: bottom 0.3s ease;

  p {
    position: static;
    font-size: clamp(14px, 2rem, 18px);
    color: white;
    background: none;
    padding: 0;
  }

  ${Loja}:hover & {
    bottom: 0;
  }
`


