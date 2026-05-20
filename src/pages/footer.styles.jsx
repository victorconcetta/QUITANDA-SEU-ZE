import styled from 'styled-components'
import cerca from '../assets/img/cerca.png'

export const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: flex-start;
  padding: 30px;
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
 } 
`

export const Left = styled.div`
display: flex;
flex-direction: column;
min-width: 200px;
align-items: center;
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
justify-content: center;
align-items: center;
flex-direction: column;
padding: 50px 0;
min-width: 200px;

ul {
  padding: 0px;
  display: flex;
  flex-direction: column;
justify-content: center;
align-items: left;
  list-style: none;

  @media (max-width: 900px) {
    font-size: 12px;
}
}
`

