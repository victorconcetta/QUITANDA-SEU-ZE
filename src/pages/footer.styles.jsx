import styled from 'styled-components'
import cerca from '../assets/img/cerca.png'

export const Container = styled.div`
display: flex;
justify-content: space-evenly;
align-items: flex-start;
  padding: 10px;
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

align-items: center;
padding-bottom: 100px;
 } 
`

export const Left = styled.div`
display: flex;
flex-direction: column;
min-width: 200px;
align-items: center;

@media (max-width: 768px) {

justify-content: flex-start;
min-width: 0px;
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



  ul {
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    list-style: none;

    @media (max-width: 900px) {
      font-size: 12px;
    }
  }
`

export const Center = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  padding: 10px 0;

  gap: 100px;

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

`

export const UlMenu = styled.div`

`

export const LiMenu = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
`

export const Produtos = styled.div`

ul {
display: flex;
flex-direction: column;
}
`

