import styled from 'styled-components'
import ofertas from '../assets/img/ofertas.png'
import bg from '../assets/img/bg.png'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0px;
width: 100%;
height: auto;
gap: 30px;
padding: 10px 0px 150px;


`
export const ContainerSwiper = styled.div`
padding-top: 100px;

  @media (max-width: 900px) {
padding-top: 70px;

  }
`
export const DivCentro = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  align-items: center;
  padding: 20px 10%;
  background: #e0e0e0;
  padding: 20px 25%;


  @media (max-width: 1280px) {
    align-items: center;
    justify-content: center;
    padding: 30px 5%;
  }
    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 5%;
  }
`
export const DivCentroTexto = styled.div`
  flex: 1;
  width: 100%;
  align-items: center;
  text-align: left;


h1 {
    color: var(--principaldarker);
    padding-bottom: 20px;
        font-size: clamp(10px, 2vw, 20px);

}
     p {
    font-size: clamp(10px, 2vw, 16px);
   } 

  @media (max-width: 1280px) {

  h1 { 
    font-size: 20px; 
   }
   p {
    font-size: 15px;
   } 
  }

 @media (max-width: 768px) {
    
   p {
    font-size: 13px; 
   } 
   h1 { 
    font-size: 16px; 
   }
  }
`


export const DivCentroImg = styled.div`
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  max-height: 400px;

  img {
    width: 100%;
    height: 100%;
    aspect-ratio: 2.1;
    object-fit: cover;
    display: block;
    opacity: 0.85;
    
  }

  @media (max-width: 1280px) {
    width: 80%;
    height: 300px;
    max-height: 200px;

  }
    @media (max-width: 768px) {
    width:100%;
    height: 300px;
    max-height: 300px;
    aspect-ratio: 2.1;

  }
`
export const Banner3 = styled.div` 
display: flex;
justify-content: center;
align-items: center;
  width: 70%;
 @media (max-width: 1280px) {
    width: 100%;
    top: 0px;
 }
`


export const Ofertas = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
    margin-top: 50px;
    margin-bottom: 10px;
  background-image: url(${ofertas});
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--bg);
    opacity: 0.85;
  }

 p {
    font-size: clamp(16px, 2vw, 40px);
    font-weight: 600;
    position: relative;
    z-index: 1;
    text-align: center;
    color: var(--principaldarker);
    text-shadow: 2px 8px 17px rgba(0, 0, 0, 0.274);

  }

  a{
    text-decoration: none;
  }

  @media (max-width: 768px) {
   margin-top: 0px;
   padding: 0px;
   height: 150px;
  }
`

export const ContainerSwiperProd = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  width: 80%;
  align-self: stretch;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 0px;

  h1 {
    font-size: 20px;
    padding-bottom: 20px;
    text-align: center;
  }

  @media (max-width: 768px) {
      width: 80%;

 h1 {   
       font-size: 16px;
 }
  }

`;