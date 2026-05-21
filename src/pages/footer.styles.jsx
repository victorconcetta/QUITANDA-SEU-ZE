import styled from 'styled-components'
import cerca from '../assets/img/cerca.png'

export const Container = styled.div`
display: flex;
justify-content: space-evenly;
align-items: flex-start;
  padding: 10px 10%;
  margin: 0px;
  width: 100%;
  min-height: 300px;
  background-color: var(--principallight);
  background-image: url(${cerca});
 background-size: 400px;
  background-position: bottom;
  background-repeat: repeat-x;


    h1 {
    font-size: clamp(18px, 4vw, 18px);
  }
  p {
    font-size: clamp(10px, 3vw, 12px);
    margin: 0px;
  }

 @media (max-width: 900px) {
  flex-wrap: wrap;
padding-bottom: 100px;
  padding: 10px 3%;
 } 

  @media (max-width: 768px) {
  flex-wrap: wrap;
padding-bottom: 100px;
  padding: 10px 10px;
 } 
`

export const Left = styled.div`
display: flex;
flex-direction: column;
min-width: 200px;
align-items: center;
padding: 10px 0;
font-size: 14px;

@media (max-width: 768px) {

justify-content: flex-start;
min-width: 300px;
padding-bottom: 30px;
}
`
export const Head = styled.div`
display: flex;
justify-content: center;

img {
  width: 100px;
}
`
export const Right = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px 0;
  font-size: 14px;

    @media (max-width: 768px) {

  align-items: center;
  justify-content: center;
  padding-bottom: 30px;

    min-width: 300px;
}

  ul {
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    list-style: none;

    @media (max-width: 768px) {

padding-bottom: 30px;
}
  }
`

export const Center = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex: 1;
  padding: 10px 0;


  ul, li {
font-size: 14px;
gap: 0px;
padding: 0px 5px;
margin: 0px;
align-items: flex-start;
  }
li:hover {
  transform: none;
}

@media (max-width: 768px) {
min-width: 300px;
padding-bottom: 30px;
}

`

export const UlMenu = styled.div`

`

export const LiMenu = styled.div`
  a {
    text-decoration: none;
    color: inherit;
    font-size: 14px;
  }
`

export const Produtos = styled.div`

ul {
display: flex;
flex-direction: column;
}

li {
font-size: 14px;
font-weight: 400;
}
`

