import styled from 'styled-components'
import back_head from '../assets/img/back_head.png'


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  width: 60%;
  max-width: 1300px;
  min-width: 900px;
  height: auto;
padding-top: 20px;
  flex-wrap: wrap;
  gap: 3px;

  @media (max-width: 900px) {
    min-width: unset;
    width: 90%;
  }
`
export const Texto = styled.p`

padding: 0px;
margin-bottom: 40px;

  @media (max-width: 768px) {
font-size: 13px;
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
    transition: opacity 0.3s ease;
  }

  p {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    left: 0px;
    font-size: clamp(22px, 2vw, 26px);
    color: white;
    background: rgba(0, 0, 0, 0.5);
    padding: 12px 12px;
    border-radius: 4px;
  
  @media (max-width: 900px) {
    height: auto;
  }
  }
 &:hover img{
    opacity: 1;
 }
  &:hover > p{
    display: none;
 } 

   @media (max-width: 900px) {
    width: 100%;

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
  transition: bottom 0.6s ease;

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


